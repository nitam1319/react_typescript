import React from 'react'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import  Store from '../Redux/Store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(Store)
export default function AppTodoList() {
  return (
 
          <TodoList/>

    
  )
}
