import { createSlice } from "@reduxjs/toolkit";

export type bankList_type = {
    id:number;
    name:string;
    num:string;
    cvv:string;
    expM:string;
    expY:string;
    assets:number;
    logoB:string;
    ln:string;
    history: bankHistoryList_type[]
}
export type bankHistoryList_type = {
    mony:number;
    num1:string;
    num2:string;
    logo:string;  
}
export interface bank_interface{
    bankList: bankList_type[];
    indexCard: number
}
const initialState:bank_interface = {
    bankList: [],
    indexCard: -1
}
const bankSlice = createSlice({
    name: 'bankList',
    initialState,
    reducers:{
        addCard:(state,{payload}:{payload:bankList_type})=>{
            let copy = [...state.bankList];
            copy.push(payload)
            state.bankList = copy
        },
        selectCard:(state,{payload}:{payload:number})=>{
          state.indexCard = state.bankList.findIndex(item=> item.id === payload)  
        },
        internalPay:(state,{payload}:{payload:bankHistoryList_type})=>{
            let ind = state.bankList.findIndex(item=>item.num === payload.num2);
            let p = [...state.bankList]
            p[state.indexCard].assets = p[state.indexCard].assets - payload.mony
            p[ind].assets = p[ind].assets + payload.mony
            p[state.indexCard].history.push(payload)
            state.bankList = p
        },
        externalPay:(state,{payload}:{payload:bankHistoryList_type})=>{
            let p =[...state.bankList]
            p[state.indexCard].assets = p[state.indexCard].assets - payload.mony
            p[state.indexCard].history.push(payload)
            state.bankList = p
        },
        deleteCard:(state,{payload}:{payload:number})=>{
           state.bankList = state.bankList.filter(item=>item.id !== payload) 
           state.indexCard = -1
        }
    }
})
export const {addCard,selectCard,internalPay,externalPay,deleteCard} = bankSlice.actions 
export default bankSlice.reducer