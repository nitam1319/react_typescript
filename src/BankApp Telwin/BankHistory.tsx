import React from 'react'
import History from './History'
import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import TableContainer from '@mui/material/TableContainer';
import { useSelector } from 'react-redux';
import { bank_interface } from '../Redux/Reducers/BankReducer';
import { state_type } from '../Redux/Store/Store';



export default function BankHistory() {
  const index = useSelector((state:state_type)=> state.root.bank.indexCard)
  const list = useSelector((state:state_type)=> state.root.bank.bankList)
  return (
    
    <div className="divB4">
      <TableContainer  sx={{backgroundColor:'#607d8b'}} >
      <Table sx={{ minWidth: '100%' ,color:'#fff'}} >
        <TableHead>
          <TableRow >
            <TableCell  align="left">From</TableCell>
            <TableCell  align="left">Destination</TableCell>
            <TableCell  align="left">Bank</TableCell>
            <TableCell  align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        
        { list[index].history.map(item=> <History {...item}/>)}
      </Table>
      </TableContainer>
      
      
    </div>
  )
}
