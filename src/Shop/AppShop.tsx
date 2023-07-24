import React from 'react'
import Shop from './Shop'
import ShopContext from './ShopContext'
import { Provider } from 'react-redux'
import Store from '../Redux/Store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(Store)
export default function AppShop() {
  return (

            <Shop/> 
        
    )
}