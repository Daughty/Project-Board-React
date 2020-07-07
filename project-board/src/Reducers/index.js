import {initialState} from './dataFile';

const taskReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'ADD_TASK':
            let tasksList = [...state.statusList];
            const newTask = {...state.defaultTask , ...action.payload};
            const list = tasksList.find((entry)=>entry.id === action.statusId);
            const card = [...list.tasks];
            list.tasks = card.concat(newTask);
            return {
                ...state,
                statusList:tasksList, 
                taskCount:state.taskCount+1
            };
        case 'DEL_TASK':
            debugger;
            const delList = state.statusList.find((entry)=>entry.id === action.statusId);
            const newtList = [...delList.tasks].filter((task)=>(task.id!==action.taskId));
            const newStatList = state.statusList.map((entry)=>{
                if(entry.id === action.statusId){
                        entry.tasks = newtList;
                }
                   return entry;
            });

            return {
                ...state,
                statusList:newStatList
            };
        case 'CHANGE_STATUS_NAME':
            const allStatus = [...state.statusList];
            const newStatusList = allStatus.map((entry)=>{
                if(entry.id===action.statusId){
                    entry.name=action.newName;
                }
                return entry;
            });
            return {
                ...state,
                statusList:newStatusList,
                
            }
        case 'SORT':
            const {droppableIdStart,droppableIdEnd,
                droppableIndexStart,droppableIndexEnd,
                } = action.payload;
            const newState = {...state};
            // in same status board
            if(droppableIdStart === droppableIdEnd){
               const sampleList = [...newState.statusList];
               const list = sampleList.find((sList)=>sList.id === droppableIdStart);
               const card = list.tasks.splice(droppableIndexStart,1);
               list.tasks.splice(droppableIndexEnd,0,...card);
            }
            // moving between the boards
            if(droppableIdStart !== droppableIdEnd){
                const sampleList = [...newState.statusList];
                const listStart = sampleList.find((sList)=>sList.id === droppableIdStart);
                const card = listStart.tasks.splice(droppableIndexStart,1);
                const listEnd = sampleList.find((sList)=>sList.id === droppableIdEnd);
                listEnd.tasks.splice(droppableIndexEnd,0,...card);
             }
            return newState; 
        default:
            return {
                ...state
            }
    }

}

export default taskReducer;
