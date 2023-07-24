import React from 'react'
import './style.css'
import { useMediaQuery } from '@mui/material'
import { useDispatch } from 'react-redux'
import { selectCard , bankList_type, deleteCard} from '../Redux/Reducers/BankReducer'
import { DivCard } from './StyledComponents'
export default function BankCardList(prop:bankList_type) {
    const dispatch =useDispatch()
    const r300 = useMediaQuery('(min-width:350px)')
  return (
    <DivCard onClick={()=>dispatch(selectCard(prop.id))} onContextMenu={(e:any)=>{e.preventDefault();dispatch(deleteCard(prop.id))}}>
    {/* <div className="container" style={{backgroundColor:'#000',minWidth:r300?'':260,marginLeft:r300? '':3,marginRight:r300? '':3}} onClick={()=>dispatch(selectCard(prop.id))} onContextMenu={(e)=>{e.preventDefault();dispatch(deleteCard(prop.id))}} > */}
    <header className='header'>
      <span className="logo">
        <img src={prop.logoB} alt="" />
        <h5 style={{display:r300? '': 'none'}}>{prop.ln}</h5>
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
      <div className="valid-date" style={{display:r300? '': 'none'}}>
        <h6 className='h6'>Cvv2</h6>
        <h5>{prop.cvv}</h5>
        <h6 className='h6'>Valid Thru</h6>
        <h5>{prop.expY}/{prop.expM}</h5>
      </div>
    </div>
    {/* </div>    */}
    </DivCard>    
  )
}
