import React , { Component } from 'react';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Container from '../../components/Container';
import Button from '../../components/Button';


class EditTask extends Component{
    state={
            name:this.props.taskName,
            dueDate:this.props.due,
            progress:(this.props.progress).split('%')[0],
            assignee:this.props.assignee,
            id:this.props.id
    }

    formTaskObj = (key,value) => {
      this.setState({[key]:value});
    }
    handleSaveObj=()=>{
    const sample = this.state;
    sample.progress = sample.progress + '%';
    this.props.handleSave(sample);
    }

    render(){
        return(
            <Modal showModal={this.props.showModal} handleClose={this.props.hideModal}>
             <Container custom_type="mo_col_wrap">
                <Container custom_type="modal_wrap">
                    <Input custom_type="editName" 
                    full_width placeholder="Task name" 
                    val={this.props.taskName}
                    hidden={true}
                    uniqueMark="mod_input"
                    name="name"
                    formTaskObj={this.formTaskObj}
                    /> 
                </Container>
                <Container custom_type="extra_wrap">
                    <Input custom_type="dueDate" 
                     placeholder="Enter Due Date"
                     val={this.props.due} 
                    type="date"
                    label="Due:"
                    uniqueMark="mod_input"
                    name="dueDate"
                    formTaskObj={this.formTaskObj}
                    />
                </Container>
                <Container custom_type="extra_wrap">
                    <Input custom_type="dueDate" 
                    placeholder="Enter Progress(%)" 
                    val={this.state.progress}
                    type="number"
                    label="Progress:"
                    uniqueMark="mod_input"
                    name="progress"
                    formTaskObj={this.formTaskObj}
                    />
                </Container>
                <Container custom_type="extra_wrap">
                    <Input custom_type="dueDate" 
                    placeholder="Assigned To"
                    val={this.state.assignee} 
                    type="text"
                    label="Assignee:"
                    uniqueMark="mod_input"
                    name="assignee"
                    formTaskObj={this.formTaskObj}
                    />
                </Container>
                <Button label="save" onClick={this.handleSaveObj}/>
             </Container>

            </Modal>
        )
    }
}


export default EditTask;