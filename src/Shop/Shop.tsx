import React, {  useEffect , useState} from 'react'
import './shop.css'
import ShopList from './ShopList'
import { useDispatch , useSelector } from 'react-redux'
import { add,edit2,Shop_initialState, ShopList_type } from '../Redux/Reducers/ShopListReducer'
import { state_type } from '../Redux/Store/Store'

export default function Shop(): JSX.Element {
  const dispatch = useDispatch()
  const list = useSelector((state:state_type) => state.root.shop.ShopList)
  const flag = useSelector((state:state_type) => state.root.shop.flag)
  const edi = useSelector((state:state_type) => state.root.shop.editItem) 
  const[conter ,setConter] = useState<number>(0)
  const[text ,setText] = useState<string>('')
  useEffect(() => {
    if(flag){
      setText(edi[0].txt)
      setConter(edi[0].conter)
    }
  }, [edi,flag])
  
  return (
    <div className='divSall'>
        <div className="divShed">
            <input type="text" className="inpS" value={text} onChange={(e)=> setText(e.target.value)} />
            <button className="btnS" style={{display:!flag? 'flex':'none'}} onClick={()=>{text&&dispatch(add({txt:text,conter:conter}));setText('');setConter(0)}}>Add</button>
            <button className="btnS" style={{display:flag? 'flex':'none'}} onClick={()=>{text&&dispatch(edit2({id:edi[0].id,txt:text,conter:conter}));setText('');setConter(0)}}>Edit</button>
            <button className="btnSs" onClick={()=>setConter(conter+1)}>+</button>
            <span className='btnSs'  >{conter}</span>
            <button className="btnSs" onClick={()=>conter > 0 ? setConter(conter-1):setConter(0)}>-</button>
        </div>
        <div className="divShed1">
            {list.map((item:ShopList_type)=> <ShopList {...item} />)}
        </div>
    </div>
  )
}
