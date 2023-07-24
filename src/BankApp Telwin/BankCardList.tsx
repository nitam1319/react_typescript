import React from 'react'
import './style.css'
import { useMediaQuery } from '@mui/material'
import { useDispatch } from 'react-redux'
import { selectCard , bankList_type, deleteCard} from '../Redux/Reducers/BankReducer'
export default function BankCardList(prop:bankList_type) {
    const dispatch =useDispatch()
  return (
    <div className="relative h-48 p-6 rounded-3xl min-w-[350px] mx-10 shadow-2xl text-black bg-[#bf1ca1] dark:bg-[#3d0e5b] dark:text-white mob:mx-2 mob:min-w-[300px] mob:px-2"   onClick={()=>dispatch(selectCard(prop.id))} onContextMenu={(e)=>{e.preventDefault();dispatch(deleteCard(prop.id))}} >
    <header className='header'>
      <span className="logo">
        <img src={prop.logoB} alt="" />
        <h5>{prop.ln}</h5>
      </span>
      <div className="valid-date">
      <h6 className='h6' >Assets</h6>
      <h5>£ {prop.assets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
      </div>
    </header>
    <div className="card-details">
      <div className="name-number">
        <h6 className='h6'>Card Number</h6>
        <h5 className="number">{prop.num.replace(/\B(?=(\d{4})+(?!\d))/g, " ")}</h5>
        <h5 className="name">{prop.name}</h5>
      </div>
      <div className="valid-date" >
        <h6 className='h6'>Cvv2</h6>
        <h5>{prop.cvv}</h5>
        <h6 className='h6'>Valid Thru</h6>
        <h5>{prop.expY}/{prop.expM}</h5>
      </div>
    </div>
  </div>
         
  )
}
