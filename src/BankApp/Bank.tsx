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
export default function Bank() {
  const list = useSelector((state:state_type)=>state.root.bank.bankList)
  const [value1, setValue1] = useState('Add Card')
  const nav = useNavigate()
  const t = useTheme()
  const r = useMediaQuery(t.breakpoints.down('md'))
  return (
    <div className='divBA'>
        <div className="divB0" style={{width: r?'100%':''}}>
            <div className="divB1">
              {list.map(item=><BankCardList {...item}/>)}
            </div>
            <BottomNavigation value={value1} sx={{ width: "100%",justifyContent:"space-evenly",backgroundColor:'#f88f03' }}  >
              <BottomNavigationAction  label="Add Card" onClick={()=>{setValue1("Add Card");nav('/bank-App/')}}value={"Add Card"}  icon={<AddCardSharpIcon sx={{fontSize: 30}}/>} />
              <BottomNavigationAction label="Payment"  onClick={()=>{setValue1("Payment");nav('/bank-App/Payment')}}value={"Payment"} icon={<MonetizationOnSharpIcon sx={{fontSize: 30}}/>} />
              <BottomNavigationAction label="History"  onClick={()=>{setValue1("History");nav('/bank-App/History')}}value={"History"} icon={<RestoreSharpIcon sx={{fontSize: 30}}/>} />
            </BottomNavigation>
            <Outlet/>   
        </div>
    </div>
    
  )
}
