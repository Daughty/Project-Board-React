import React , { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";

//Components import
import Container from '../../components/Container'

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