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
export default function BankTel() {
  const list = useSelector((state:state_type)=>state.root.bank.bankList)
  const [value1, setValue1] = useState('Add Card')
  const nav = useNavigate()
  const t = useTheme()
  const r = useMediaQuery(t.breakpoints.down('md'))
  const html = document.getElementsByTagName('html')[0]
  console.log(html)
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center mt-14 '>
      <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" onClick={()=>{html.classList.toggle('dark')}}></input>
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
        <div className='w-full h-[720px] flex flex-col justify-start  items-center -mt-5 pt-2.5 lg:w-3/5 md:w-[90%] sm:w-full md:rounded-2xl lg:rounded-2xl  sm:rounded-none bg-[#2e4ef1] dark:bg-[#09034a]' >
            <div className="w-full h-1/3 flex items-center justify-start overflow-x-auto overflow-y-hidden">
              {list.map(item=><BankCardList {...item}/>)}
            </div>
            <div className="w-full bg-[#4e0070] dark:bg-[#9220c2]">
            <BottomNavigation value={value1} sx={{ width: "100%",justifyContent:"space-evenly", background: 'none' }}  >
              <BottomNavigationAction  label="Add Card" onClick={()=>{setValue1("Add Card");nav('/bank-App-Tel/')}}value={"Add Card"}  icon={<AddCardSharpIcon sx={{fontSize: 30}}/>} />
              <BottomNavigationAction label="Payment"  onClick={()=>{setValue1("Payment");nav('/bank-App-Tel/Payment')}}value={"Payment"} icon={<MonetizationOnSharpIcon sx={{fontSize: 30}}/>} />
              <BottomNavigationAction label="History"  onClick={()=>{setValue1("History");nav('/bank-App-Tel/History')}}value={"History"} icon={<RestoreSharpIcon sx={{fontSize: 30}}/>} />
            </BottomNavigation>
            </div>
            <Outlet/>   
        </div>
    </div>
    
  )
}
