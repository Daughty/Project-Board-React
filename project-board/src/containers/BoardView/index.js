import React , { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";

//Components import
import Container from '../../components/Container'
import {Ul,Li} from './../../components/Text';

//Sub-Containers import
import StatusCard from './StatusCard'

import {changeSort} from './../../Action Creators';

class BoardView extends Component{
    state = {}

    onDragEnd = (result) => {
        if(result) {
            const { destination , source , draggableId } = result;
            if(!result.destination)
                return;
            this.props.changeSort(source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId);
        } 
    }

    render(){
        return(
           <Container custom_type="board_nav_wrap">
            <Container custom_type="nav_wrap_ver_two">
                <Ul custom_type="nav_wrap_ul" versionTwo>
                    <Li  key="1l"custom_type="nav_wrap_li">List</Li>
                    <Li  key="2l"custom_type="nav_wrap_li" >Gantt</Li>
                    <Li  key="3l"custom_type="nav_wrap_li" active>Board</Li>
                    <Li  key="4l"custom_type="nav_wrap_li">Calender</Li>
                    <Li  key="5l"custom_type="nav_wrap_li">Process</Li>
                </Ul>
            </Container>

           <DragDropContext onDragEnd={this.onDragEnd}>
            <Container custom_type="board_wrap">
                {this.props.statusList.map((entry)=>{
                    return(
                        <StatusCard cardId={entry.id} 
                        name={entry.name} 
                        key={entry.id}
                        tasks={entry.tasks}
                        />
                    )  
                })}
            </Container>
           </DragDropContext>
           </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        statusList:state.statusList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeSort:(droppableIdStart,droppableIdEnd,
                    droppableIndexStart,droppableIndexEnd,
                    draggableId)=>dispatch(changeSort(droppableIdStart,droppableIdEnd,
                               droppableIndexStart,droppableIndexEnd,
                               draggableId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardView);