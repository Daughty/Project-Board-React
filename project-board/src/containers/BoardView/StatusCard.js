import React , { Component} from 'react';
import Card from './../../components/Card';
import Input from './../../components/Input';
import Container from './../../components/Container';
import TaskCard from './TaskCard';
import {Droppable} from "react-beautiful-dnd";


import { connect } from 'react-redux';
import { addTask,changeStatusName } from './../../Action Creators/index'


class StatusCard extends Component {
    state = {}
    addIssue = (newTask) => {
      if(newTask!==''|| newTask!=='undefined'){
        let tempTask = {
          id:this.props.taskCount+1,
          name:newTask,
          status_id:this.props.cardId,
          progress:'50%'
        };
        this.props.addTask(tempTask,this.props.cardId);
      }
      console.log(this.props.stateObj);
    };  
    handleInput = (newName) => {
       this.props.changeStatusName(newName,this.props.cardId);
    } 
  
    render(){
        
        return (
          <Droppable  droppableId={this.props.cardId}>
            {(provided)=>(
              <div className="stretchy" ref={provided.innerRef} {...provided.droppableProps}>
              <Container id={this.props.cardId}
              custom_type="stat_wrap" 
              >
                <Card custom_type="stat_header">
                      <Input custom_type="editName" placeholder="Column name" 
                      val={this.props.name}
                      handleInput={this.handleInput}
                      id={'in_'+this.props.cardId}
                      />
                </Card>
                <Card custom_type="stat_card">
                  <Container custom_type="task_col">
                  {this.props.tasks.map((task,index)=>{
                        return(<TaskCard 
                          id={task.id} 
                          taskName={task.name} 
                          key={task.id}
                          progress={task.progress}
                          assignee={task.assignee}
                          index={index}
                          status_id={this.props.cardId}
                          due={task.dueDate?task.dueDate:''}
                          />)
                  })}
                  {provided.placeholder}
                  </Container>
                  <Card custom_type="create_wrap">
                    <Input 
                    id={"create_"+this.props.cardId}
                    status_id={this.props.cardId}
                    custom_type="createIssue" 
                    placeholder="+ Create Issue" 
                    handleInput={this.addIssue}
                    />
                  </Card>
                </Card>
              </Container>
              </div>
            )}  
          </Droppable>
        )
    }
}

const mapStateToProps = state => {
  return {
    taskList:state.tasks,
    statusList:state.statusList,
    taskCount:state.taskCount,
    stateObj:state
  }
}

const mapStateToDispatch = dispatch => {
  return {
    addTask: (payload,statusId) => dispatch(addTask(payload,statusId)),
    changeStatusName:(newName,statusId) => dispatch(changeStatusName(newName,statusId))
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(StatusCard);