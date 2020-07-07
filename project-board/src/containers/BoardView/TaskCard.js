import React , { Component,Fragment } from 'react';
import Avatar from 'react-avatar';

import Card from './../../components/Card';
import Label from './../../components/Text';
import EditTask from './EditTask';
import Container from './../../components/Container';
import DropDown from './../../components/DropDown';

import { connect } from 'react-redux';
import { delTask,editTask } from './../../Action Creators';

import {Draggable} from "react-beautiful-dnd";


class TaskCard extends Component {
    state = {
        openModal:false,
        isOpen:false,
        flag:false,
        options:[
            {id:'1',name:"Add label"},
            {id:'2',name:"Toggle flag"},
            {id:'3',name:"Delete task"},
        ]
    }
    showModal = () => {
        this.setState({ openModal: true });
    };
    
    hideModal = () => {
        this.setState({ openModal: false });
    };
    
    handleCardClick = () => {
        this.showModal();
    }

    openDrop = (e) => {
        console.log(e.stopPropagation());
        //e.stopPropogation();
        this.setState((prevState) => ({ isOpen: !prevState.isOpen})); 
    }

    addFlag = () => {
        this.setState((prevState) => ({flag:!prevState.flag}));
    }

    handleSelect = (id) => {
       switch(id){
        //    case '1': // Add label
           case '2': // Add Flag
            return this.addFlag();
           case '3': // Delete task
            return this.props.delTask(this.props.id,this.props.status_id)
           default:
               return;
       }
    }
    handleSave = (taskObj) => {
      this.props.editTask(taskObj,this.props.status_id);
      this.hideModal();
    }

    render(){
        return(
           <Draggable draggableId={String(this.props.id)} index={this.props.index}>
            {(provided)=>(
                <div className="taskWrap" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <Container 
                  custom_type="col" 
                  full_width={true}
                  >
                   <Card custom_type="task_card" onClick={this.handleCardClick} flag={this.state.flag}>
                       <Container custom_type="task_heading">
                           <Container custom_type="task_name_wrap">
                               <Label custom_type="task_name">{this.props.taskName}</Label>
                           </Container>
                           <Container custom_type="drop_wrap" onClick={(event)=>this.openDrop(event)}>
                               <i className="fa fa-ellipsis-h"></i>
                               <DropDown isOpen={this.state.isOpen} options={this.state.options} 
                               id={"task_Drop_"+ this.props.id}
                               handleSelect={this.handleSelect}
                               />
                           </Container>  
                       </Container>
       
                       <Container custom_type="progress_bar" width={this.props.progress} val={this.props.progress.split('%')[0]}>
                           <span/>
                           <Label custom_type="percen">{this.props.progress}</Label>
                       </Container>
       
                       <Container custom_type="avatar_wrap" flag={this.state.flag}>
                           <Label custom_type="due_date_label">{'Due:'+this.props.due}</Label>
                           <Avatar name={this.props.assignee} size="30" round={true} maxInitials={2}/>
                           <i className="fa fa-flag"></i>
                       </Container>
                   </Card> 
                   {this.state.openModal ?
                   <EditTask showModal={this.state.openModal} 
                   hideModal={this.hideModal}
                   taskName={this.props.taskName}
                   handleSave={this.handleSave}
                   id={this.props.id}
                   />
                   :<Fragment/>
                   }
                  </Container>
                  </div>
            )}
         
           </Draggable>
        )
    }
}

const mapDispatchToProps =  dispatch => {
    return {
        delTask:(taskId,statusId) => dispatch(delTask(taskId,statusId)),
        editTask:(taskObj,statusId)=>dispatch(editTask(taskObj,statusId))
    }
}

export default connect(null,mapDispatchToProps)(TaskCard);