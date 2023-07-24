import React, { useEffect, useState } from 'react'
import './timer.css'
export default function Timer() {
    const[s1,setS1] = useState(10)
    const[s2,setS2] = useState(10)
    const[m1,setM1] = useState(0)
    const[m2,setM2] = useState(0)
    const[h1,setH1] = useState(0)
    const[h2,setH2] = useState(0)
    const[flag,setFlag] = useState(0)
    useEffect(() =>{
        setTimeout(() =>{
            if(flag===1){
                if(m1 ===0 && s1 ===0&& h1 ===0){
                    setFlag(0)
                    alert('end time');
                }else{
                    if(s1===0){
                        setS1(59)
                        setM1(m1-1)
                        
                        if(m1===0 && s1===0){
                            setM1(59)
                            setS1(59)
                            setH1(h1-1)
                            console.log(2)
                        }
                    }else{

                        setS1(s1-1)
                    }
                
                }
            }else if(flag===2){
                if(m2 ===0 && s2 ===0&& h2 ===0){
                    setFlag(0)
                    alert('end time');
                }else{
                    if(s2===0){
                        setS2(59)
                        setM2(m2-1)
                        
                        if(m2===0 && s2===0){
                            setM2(59)
                            setS2(59)
                            setH2(h2-1)
                            console.log(2)
                        }
                    }else{

                        setS2(s2-1)
                    }
                    
                    
                }
            }  
        },1000)
        
    },[s1,m2,h2,m1,h1,s2,flag])
  return (
    <div className='divTA'>
        <div className="divT" onClick={()=>setFlag(2)} >{`${h1}:${m1}:${s1}`}</div>
        <div className="divT" onClick={()=>setFlag(1)} >{`${h2}:${m2}:${s2}`}</div>
    </div>
  )
}
