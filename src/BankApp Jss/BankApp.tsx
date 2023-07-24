import React from 'react'
import Bank from './Bank'
import { Provider } from 'react-redux'
import Store from '../Redux/Store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistorBank = persistStore(Store)
export default function BankApp() {
  return (
    
      // <Provider store={Store}>
        // {/* <PersistGate loading={<div className='divLoading'><img className='img' src='/gif/gif2.gif'></img></div>} persistor={persistorBank}> */}
          <Bank/>
        // </PersistGate>
      // </Provider>

  )
}
