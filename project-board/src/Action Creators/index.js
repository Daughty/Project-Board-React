import * as action from './actions';



export const addTask=(payload,statusId)=>{
    return {
    type:action.ADD_TASK,
    payload,
    statusId
    };  
}


export const delTask = (taskId,statusId) => {
    return {
    type:action.DEL_TASK,
    taskId,
    statusId,
    };  
}


export const editTask = (taskObj,statusId) =>{
    return {
    type:action.EDIT_TASK,
    taskObj,
    statusId,
    };  
}

export const changeStatusName = (newName,statusId) =>{
    return {
    type:action.CHANGE_STATUS_NAME,
    newName,
    statusId
    };  
}

export const changeSort = (droppableIdStart,droppableIdEnd,droppableIndexStart,droppableIndexEnd,draggableId) => {
    return {
    type:action.SORT,
    payload:{droppableIdStart,droppableIdEnd,
        droppableIndexStart,droppableIndexEnd,
        draggableId}
 };  
}


