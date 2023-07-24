import { createSlice } from "@reduxjs/toolkit";
export type ShopList_type = {
    id:number;
    txt:string;
    conter:number
}
export interface Shop_initialState{
    ShopList:ShopList_type[]
    editItem:ShopList_type[]
    flag:boolean
}
type ShopList_add = {
    txt:string;
    conter:number
}
const initialState : Shop_initialState = {
    ShopList : [],
    editItem : [],
    flag : false
}
const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers:{
        add:(state,{payload}:{payload: ShopList_add})=>{
           let newItem = {id:Math.random(),txt:payload.txt, conter:payload.conter} 
           let copy = [...state.ShopList]
           copy.push(newItem)
           state.ShopList = copy
        },
        deleteItem:(state,{payload}:{payload:number})=>{
            state.ShopList = state.ShopList.filter(item => item.id !== payload)
        },
        pluse:(state,{payload}:{payload:number})=>{
            state.ShopList.some((item)=>{
                if(item.id === payload){
                  return item.conter = item.conter + 1
                }
            })   
        },
        min:(state,{payload}:{payload:number})=>{
            state.ShopList.some((item)=>{
                if(item.id === payload){
                    if(item.conter > 0){
                      return item.conter = item.conter - 1  
                    }
                }
            })   
        },
        edit1:(state,{payload}:{payload:number})=>{
            state.editItem = state.ShopList.filter(item => item.id === payload);
            state.flag = true;
        },
        edit2:(state,{payload}:{payload:ShopList_type})=>{
            let copy = [...state.ShopList]
            let editList = {id:state.editItem[0].id , txt:payload.txt, conter:payload.conter}
            let ind = state.ShopList.findIndex(item=>item.id === payload.id)
            copy.splice(ind, 1, editList)
            state.flag = false
            state.ShopList = copy
        }
    }
})

export const {add,deleteItem,pluse,min,edit1,edit2} = shopSlice.actions
export default shopSlice.reducer