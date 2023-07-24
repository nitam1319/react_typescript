import React, { useState, useEffect } from 'react'
import './todo.css'
import List from './List'
import { useDispatch, useSelector } from 'react-redux'
import { add , edit2 , todo_obj} from '../Redux/Reducers/TodoReducer'

import { state_type } from '../Redux/Store/Store'


export default function TodoList():JSX.Element {
    const [text, setText] = useState("");
    const todo = useSelector((state:state_type) => state.root.TODO.todo)
    const flag = useSelector((state:state_type)=> state.root.TODO.flag)
    const edi = useSelector((state:state_type) => state.root.TODO.obj)
    const dispatch = useDispatch()
    useEffect(() =>{
       if(flag){
            setText(edi[0].txt)
        } 
    },[edi, flag]) 
  return (
    <div className='divTD0'> 
        <div className="divTDinp">
            <input value={text } type="text" onChange={e=>setText(e.target.value)} className="inpTD" placeholder='Add todo' />
            <button className='btnTD' onClick={()=> {dispatch(add(text));  setText('')}}style={{display:!flag?'flex': 'none'}}>Add</button>
            <button className='btnTD' onClick={()=>{dispatch(edit2({id:edi[0].id , txt:text})); setText('')}} style={{display:flag?'flex': 'none'}}>Edit</button>
        </div>
        <div className="divTDShow">
            {todo.map((item: todo_obj) =><List {...item}  /> )}
        </div>
    </div>
    
  )
}
