import { createSlice  } from "@reduxjs/toolkit";
export type todo_obj = {
    id: number;
    txt: string;
}  
export interface initial_state {
    todo : todo_obj[];
    obj : todo_obj[];
    flag : boolean;
}
const initialState : initial_state = {
    todo : [],
    obj : [],
    flag : false
}
const TSlicer = createSlice({
    name: "Todo",
    initialState:initialState,
    reducers:{
        add : (state,{payload} : {payload : string}) => {
            let temp = [...state.todo]
            let newTodo = { id: Math.random() , txt: payload}
            temp.push(newTodo)
            state.todo = temp
        },
        deleteTask : (state,{payload} : {payload : number}) => {
           state.todo = state.todo.filter((item) =>item.id !== payload)
        },
        edit1: (state,{payload}: {payload : number}) => {
            state.obj = state.todo.filter((item)=>item.id === payload)
            state.flag = true
        },
        edit2: (state,{payload}:{payload : todo_obj}) => {
            let edi = { id : payload.id , txt: payload.txt}
            let copy =[...state.todo]
            let ind = state.todo.findIndex((item)=> item.id === payload.id)
            copy.splice(ind, 1 , edi)
            state.flag = false
            state.todo = copy
        }
    }
})
export const {add,deleteTask,edit1,edit2} = TSlicer.actions 
export default TSlicer.reducer