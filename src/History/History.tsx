import React, { useEffect, useMemo, useState } from 'react'
import HL from './HL'
import './HL.css'
export type H = {
    date: string;
    name: string;
    apr : string;
}
export default function History() {
    const[array , setArray] = useState<H[]>([
        {date: '2023-06-04' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-06-04' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-06-04' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-06-05' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-06-05' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-06-05' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-06-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-11' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-07-11' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-01' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-03' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-03' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-03' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-04' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-04' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-08-04' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-01' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-01' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-01' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-02' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-02' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-02' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-09-03' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-08' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-08' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-08' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-08' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-10-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-09' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-10' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-11' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-11' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-11' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-12' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-12' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-13' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-13' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-13' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-14' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-14' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-15' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-15' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-15' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-15' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-16' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-16' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-16' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-16' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-17' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-17' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-18' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-18' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-18' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-19' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-19' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-19' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-19' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-20' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-20' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-20' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-21' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-21' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-21' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-21' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-22' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-22' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-22' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-23' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-23' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-23' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-23' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-24' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-25' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
        {date: '2023-11-25' ,name: 'Ethereum_LUSD-3CRV' ,apr: '4.89%'},
    ])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(5)
    const [c, setC] = useState(5)
    const [cont, setCont] = useState(array.length / 5)
    const [arrayP, setArrayP] = useState<number[]>([])
    useEffect(()=>{
        let p = []
        let g = array.length / 5 + 1
        for(let i = 1; i < g ; i++){
            p.push(i)
        }
        setArrayP(p)
    },[])
    function c5(){
        setC(5)
        setEnd(5)
        setStart(0)
        let p = []
        let g = array.length / 5 + 1
        for(let i = 1; i < g ; i++){
            p.push(i)
        }
        setArrayP(p)
    }
    function c10(){
        setC(10);
        setEnd(10);
        setStart(0)
        let p = []
        let g = array.length / 10 + 1
        for(let i = 1; i < g ; i++){
            p.push(i)
        }
        setArrayP(p)
    }
    function c15(){
        setC(15);
        setEnd(15);
        setStart(0)
        let p = []
        let g = array.length / 15 + 1
        for(let i = 1; i < g ; i++){
            p.push(i)
        }
        setArrayP(p)
    }
    function set(p:number){
        setStart(c*p-c)
        setEnd(c*p)
    }
    
    function plus(){
        if(end < array.length-1){
            setStart(start+c)
            setEnd(end+c)
        }
    }
    function minus(){
        if(start > 0){
            setStart(start-c);
            setEnd(end-c)  
        }
    }
    let color = 'rgb(48, 45, 45)'
    
  return (
    <div className='divH'>
        <div className='divHL'  >
            <p>Time of Occurence</p>
            <p>Position:</p>
            <p>APR:</p>
        </div>
        {/* {array.map((item, index)=>(<HL elem={item} ind={index} />))} */}
        {array.map((item,index)=>{
            if(index === 0){
            }else if(array[index].date === array[index - 1].date){
            }else{
                if(color === 'rgb(48, 45, 45)'){
                    color = '#000'
                }else{
                    color = 'rgb(48, 45, 45)'
                }
            }
            if(index >= start && index < end){
                return (
                    <div className='divHL' style={{backgroundColor:color}} >
                        <p>{item.date}</p>
                        <p>{item.name}</p>
                        <p style={{color:'green'}}>{item.apr}</p>
                    </div>
                  )
            }
        })}
        <div className='conterDiv'>
            <div className='selectDiv'>
               <button onClick={()=>minus()} className='btnNum2'><img src='/gif/l.png' alt=''/></button> 
               <div className='ggg'>
                {arrayP.map((item,index)=>{
                 return (<button className='btnNum' style={{backgroundColor:end === item*c? 'red': '',width:index === 0 || index===1|| index === arrayP.length-1 || index === arrayP.length-2 ||end === item*c||arrayP[index-1]*c === end||arrayP[index+1]*c === end ? '' : 10}} onClick={()=>{set(item)}} >{index === 0 || index===1|| index === arrayP.length-1 || index === arrayP.length-2 ||end === item*c||arrayP[index-1]*c === end||arrayP[index+1]*c === end ? item : '.' }</button>)
                })}
               </div>
               <button onClick={()=>plus()} className='btnNum2'><img src='/gif/r.png' alt=''/></button> 
            </div>
            <div className='numDiv'>
                <button className='btnNum' style={{backgroundColor: c===5? 'red':''}} onClick={()=>{c5()}}>5</button>
                <button className='btnNum' style={{backgroundColor: c===10? 'red':''}} onClick={()=>{c10()}}>10</button>
                <button className='btnNum' style={{backgroundColor: c===15? 'red':''}} onClick={()=>{c15()}}>15</button>
            </div>
         
        </div>
    </div>
  )
}
