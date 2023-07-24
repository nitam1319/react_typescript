import React from 'react'
import { bank_history_list } from './BankContext'
import { TableCell, TableRow }  from '@mui/material'

export default function History(prop:bank_history_list) {

  
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            
      <TableCell  align="left">{prop.num1}</TableCell>
      <TableCell  align="left">{prop.num2}</TableCell>
      <TableCell  align="left"><img  alt="logo"src={prop.logo}/></TableCell>
      <TableCell  align="right">£{prop.mony}</TableCell>

    </TableRow>
  )
}
