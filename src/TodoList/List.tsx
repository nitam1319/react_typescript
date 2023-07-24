import React from 'react'
import { deleteTask, edit1 , todo_obj} from '../Redux/Reducers/TodoReducer'
import { useDispatch } from 'react-redux'

export default function List(prop: todo_obj) {
    const dispatch = useDispatch()  
  return (
    <div className='divTDL' >
        <div className="divTDL1">{prop.txt}</div>
            <button className='btnTDL' onClick={()=>dispatch(deleteTask(prop.id))}>Delete</button>
            <button className='btnTDL' onClick={()=>dispatch(edit1(prop.id))}>Edit</button>
    </div>
  )
}
