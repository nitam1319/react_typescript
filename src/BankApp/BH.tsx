import React from 'react'
import BankHistory from './BankHistory'
import { useMediaQuery, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { bank_interface } from '../Redux/Reducers/BankReducer'
import { state_type } from '../Redux/Store/Store'
export default function BH() {
    const index = useSelector((state:state_type)=> state.root.bank.indexCard)
    const list = useSelector((state:state_type)=> state.root.bank.bankList)
    const t = useTheme()
    const rm = useMediaQuery(t.breakpoints.down('md'))
  return (
  <>
    {index === -1?<div className='divB4'><p className='pBH' style={{fontSize:rm?40:'70px'}}>No card select</p></div>:list[index].history.length<=0? <div className='divB4'><p className='pBH' style={{fontSize:rm?40:'70px'}}>No transaction</p></div> :<BankHistory/>}
  </>
  )
}
