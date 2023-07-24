import React, {useState} from 'react'
import './bank.css'
import { Outlet, useNavigate } from 'react-router-dom'
import BankCardList from './BankCardList'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AddCardSharpIcon from '@mui/icons-material/AddCardSharp';
import { useMediaQuery, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { state_type } from '../Redux/Store/Store'
import { ThemeProvider } from 'react-jss'
import { Div,DivAll,DivCL,BD } from './React_jss'

export default function BankJss() {
  const list = useSelector((state:state_type)=>state.root.bank.bankList)
  const [value1, setValue1] = useState('Add Card')
  const nav = useNavigate()
  const light = {
    inpBg: '#7b7b7b3b',
    inpBColor:'#030303',
    color: '#000',
    BBg:'#4e0070',
    ABg: '#2e4ef1',
    BDBg:'#4e0070',
    CC:'#000000',
    CBg:'#bf1ca1',
    BgA:'#d9d7d9',
  }
  const dark = {
    inpBg: '#e0e0e03a',
    inpBColor:'#030303',
    color: '#ffffff',
    BBg:'#9220c2',
    ABg: '#09034a',
    BDBg:'#9220c2',
    CC:'#fff',
    CBg:'#3d0e5b',
    BgA:'#000',
  }
  const[isDark, setIsDark] = useState(false)
  return (
    <ThemeProvider theme={isDark?dark:light}>
      <Div>
      <div className="toggleWrapper">
    <input type="checkbox" className="dn" id="dn" onClick={()=>{setIsDark(!isDark)}}></input>
    <label htmlFor='dn' className="toggle">
        <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
    </label>
</div>
          <DivAll>
              <DivCL>
                {list.map(item=><BankCardList {...item}/>)}
              </DivCL>
              <BD>
                <BottomNavigation value={value1} sx={{ width: "100%",justifyContent:"space-evenly",background:'none' }}  >
                  <BottomNavigationAction  label="Add Card" onClick={()=>{setValue1("Add Card");nav('/bank-App-Jss/')}}value={"Add Card"}  icon={<AddCardSharpIcon sx={{fontSize: 30}}/>} />
                  <BottomNavigationAction label="Payment"  onClick={()=>{setValue1("Payment");nav('/bank-App-Jss/Payment')}}value={"Payment"} icon={<MonetizationOnSharpIcon sx={{fontSize: 30}}/>} />
                  <BottomNavigationAction label="History"  onClick={()=>{setValue1("History");nav('/bank-App-Jss/History')}}value={"History"} icon={<RestoreSharpIcon sx={{fontSize: 30}}/>} />
                </BottomNavigation>
              </BD>
              <Outlet/>   
          </DivAll>
      </Div>
    </ThemeProvider>
  )
}
