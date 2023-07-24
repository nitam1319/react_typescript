import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTodoList from './TodoList/AppTodoList';
import AppShop from './Shop/AppShop';
import Timer from './ChessTimer/Timer';
import BankApp from './BankApp/BankApp';
import BankAdd from './BankApp/BankAdd';
import BankPay from './BankApp/BankPay';
import BH from './BankApp/BH';
import History from './History/History';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import Shop from './Shop/Shop';
import TodoList from './TodoList/TodoList';
import Bank from './BankApp/Bank';
import BankStyled from './BankApp Styled/Bank'
import BankAddStyled from './BankApp Styled/BankAdd'
import BankPayStyled from './BankApp Styled/BankPay'
import BHStyled from './BankApp Styled/BH'
import BankJss from './BankApp Jss/Bank'
import BankAddJss from './BankApp Jss/BankAdd'
import BankPayJss from './BankApp Jss/BankPay'
import BHJss from './BankApp Telwin/BH'
import BankTel from './BankApp Telwin/Bank'
import BankAddTel from './BankApp Telwin/BankAdd'
import BankPayTel from './BankApp Telwin/BankPay'
import BHTel from './BankApp Telwin/BH'
import Sort from './Sort/Sort';
let persistor = persistStore(Store)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={<div className='divLoading'><img className='img' src='/gif/gif2.gif'></img></div>}>
      <App />
        
      <Routes>
        <Route path='/todo-list' element={<TodoList/>}/>
        <Route path='/shop' element={<Shop/> }/>
        <Route path='/chess-timer' element={<Timer/>}/>
        <Route path='/bank-App' element={<Bank/>}> 

              <Route path='/bank-App/' element={<BankAdd/>} />
              <Route path='Payment' element={<BankPay/>} />
              <Route path='History' element={<BH/>} />
              
        </Route>
        <Route path='/bank-App-Tel' element={<BankTel/>}> 

              <Route path='/bank-App-Tel/' element={<BankAddTel/>} />
              <Route path='Payment' element={<BankPayTel/>} />
              <Route path='History' element={<BHTel/>} />
              
        </Route>
        <Route path='/bank-App-Jss' element={<BankJss/>}> 

              <Route path='/bank-App-Jss/' element={<BankAddJss/>} />
              <Route path='Payment' element={<BankPayJss/>} />
              <Route path='History' element={<BHJss/>} />
              
        </Route>
        <Route path='/bank-App-styled' element={<BankStyled/>}> 

              <Route path='/bank-App-styled/' element={<BankAddStyled/>} />
              <Route path='Payment' element={<BankPayStyled/>} />
              <Route path='History' element={<BHStyled/>} />
              
        </Route>
        <Route path='/History' element={<History/>}/>
        <Route path='/Sort' element={<Sort/>}/>
        <Route path='/Sort' element={<Sort/>}/>
      </Routes>
        
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
