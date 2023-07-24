import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TSlicer, { initial_state } from '../Reducers/TodoReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import shopSlice, { Shop_initialState } from '../Reducers/ShopListReducer'
import bankSlice, { bank_interface } from '../Reducers/BankReducer'
export type state_type = {
  root: {
      TODO: initial_state;
      shop: Shop_initialState;
      bank: bank_interface;
  } 
}
const rootReducer = combineReducers({
  TODO:TSlicer,
  shop:shopSlice,
  bank:bankSlice,
})
const persistConfig:any = {
    key: 'todo',
    version: 1,
    storage,
  }
// const persistConfigShop:any = {
//     key: 'ShopList',
//     version: 1,
//     storage,
//   }
// const persistConfigBank:any = {
//     key: 'bank',
//     version: 1,
//     storage,
//   }
const persistRoot = persistReducer(persistConfig ,rootReducer)
// const persistShopList = persistReducer(persistConfigShop ,shopSlice)
// const persistBank = persistReducer(persistConfigBank ,bankSlice)
const Store = configureStore({
    reducer:{
        root:persistRoot
    }
})
export default Store