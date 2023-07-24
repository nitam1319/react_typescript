import React  from 'react'
import { ShopList_type , deleteItem , pluse , min, edit1} from '../Redux/Reducers/ShopListReducer'
import { useDispatch } from 'react-redux'

export default function ShopList(prop:ShopList_type ) : JSX.Element{
    const dispatch = useDispatch()
  
  return (
    <div className='divSLA'>
        <div className="divsla">{prop.txt}</div>
        <button className="btnSs" onClick={()=>{dispatch(pluse(prop.id))}}>+</button>
            <span className='btnSs'>{prop.conter}</span>
            <button className="btnSs" onClick={()=>{dispatch(min(prop.id))}}>-</button>
        <div className="btnS"onClick={()=>{dispatch(deleteItem(prop.id))}} style={{backgroundColor:'blueviolet',color:'#fff'}}>Delete</div>
        <div className="btnS"onClick={()=>{dispatch(edit1(prop.id))}} style={{backgroundColor:'blueviolet',color:'#fff'}}>Edit</div>
    </div>
  )
}
