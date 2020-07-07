import React , { Component,Fragment } from 'react';
import StyledInput from './Input.style';
import Label from './../Text';



class Input extends Component {

  state = {
      val:this.props.val?this.props.val:'',
  };

  timer = null;
  handleChange = (e) => {
      clearTimeout(this.timer);
      this.setState({val:e.target.value});

      this.timer = setTimeout(()=>{
        console.log('query:',this.state.val);
        if(this.props.handleInput)
          this.props.handleInput(this.state.val);

        if(this.props.custom_type==='createIssue'){
          this.setState({val:''});
        }
      },1200);
      
  }
  render() {
    return (
        <Fragment>
            <Label htmlFor={this.props.id} hidden={this.props.hidden}>{this.props.label}</Label>
            <StyledInput 
            id={this.props.id} 
            type={this.props.type}
            onChange={this.handleChange}
            value={this.state.val} 
            custom_type={this.props.custom_type}
            placeholder={this.props.placeholder}
            full_width={this.props.full_width}
            />
        </Fragment>
       
    )
  }
  
}

export default Input;