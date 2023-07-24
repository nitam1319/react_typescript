import React, { useMemo, useState } from 'react'
import {  Alert,  Collapse,  IconButton,} from '@mui/material'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import CloseIcon from '@mui/icons-material/Close';

import {addCard, bank_interface} from '../Redux/Reducers/BankReducer'
import { useDispatch, useSelector } from 'react-redux';
import { state_type } from '../Redux/Store/Store';
import { AddDiv, Btn, Input,DivImg ,DivData} from './StyledComponents';
export default function BankAddStyled(): JSX.Element {
  const dispatch = useDispatch()
  const list = useSelector((state:state_type)=>state.root.bank.bankList)
  const[cardNumber , setCardNumber] = useState<string>('')
  const[cardName , setCardName] = useState<string>('')
  const[cvv2 , setCvv2] = useState<string>('')
  const[expM , setExpM] = useState<string>('')
  const[expY , setExpY] = useState<string>('')
  const[asset, setAsset] = useState<number>(0)
  const[logo , setLogo] = useState<string>('')
  const[logoName , setLogoName] = useState<string>('')
  const regex2 = /[(\]!@#$%^&*()\._+=<>{}[)\\e'"`~/,|;:?\\-]|[A-Za-z]+/
  const regex = /[(\]!@#$%^&*()\._+=<>{}[)'"`~/,|;:?\\-]|[0-9]+/

  const [a, setA] = useState(0)

  function add(){
    if(cardName.length < 5 || cardNumber.length !== 16 || cvv2.length <3 || expM.length !==2 || expY.length !== 2|| asset < 100 || logo === ''|| list.findIndex((item) => item.num === cardNumber) !== -1|| +(expM) > 12){
      setA(1)
    }else{
      let newCards = {id: Math.random() ,name:cardName ,num:cardNumber ,cvv:cvv2 ,expM:expM ,expY:expY ,assets:asset ,logoB: logo,ln: logoName ,history:[]}
      dispatch(addCard(newCards))
      setLogo('')
      setCardName('')
      setCardNumber('')
      setCvv2('')
      setExpM('')
      setExpY('')
      setAsset(0)
      setA(2)
    }
  }
  useMemo(()=>{
    setTimeout(()=>{setA(0)}, 5000)
  },[a])
  useMemo(()=>{
    if(cardNumber.length > 5){
      let sixFirstNum = cardNumber.slice(0,6)
      switch (+(sixFirstNum)) {
        case 603799:
            setLogo('/bankLogo/melli - www-tejiran-ir.png')
            setLogoName('Melli')
            break;
        case 589210:
            setLogo('/bankLogo/589210.png')
            setLogoName('Sepah')
            break; 
        case 627648:
            setLogo('/bankLogo/saderat - www-tejiran-ir.png')
            setLogoName('Saderat')
            break; 
        case 627961:
            setLogo('/bankLogo/sanat o madan-www-tejiran-ir.png')
            setLogoName('Sanat Madan')
            break; 
        case 603770:
            setLogo('/bankLogo/keshavarzi-www-tejiran-ir.png')
            setLogoName('Keshavarzi')
            break; 
        case 628023:
            setLogo('/bankLogo/maskan - www-tejiran-ir.png')
            setLogoName('Maskan')
            break; 
        case 627760:
            setLogo('/bankLogo/post.png')
            setLogoName('Post Bank')
            break; 
        case 502908:
            setLogo('/bankLogo/tosee-taavon-www-tejiran-ir.png')
            setLogoName('Tosee Taavon')
            break; 
        case 627412:
            setLogo('/bankLogo/eghtesad - www-tejiran-ir.png')
            setLogoName('Eghtesad')
            break; 
        case 622106:
            setLogo('/bankLogo/parsian - www-tejiran-ir.png')
            setLogoName('Parsian')
            break; 
        case 502229:
            setLogo('/bankLogo/pasargad-www-tejiran-ir.png')
            setLogoName('Pasargad')
            break; 
        case 627488:
            setLogo('/bankLogo/karafarin - www-tejiran-ir.png')
            setLogoName('Karafarin')
            break; 
        case 621986:
            setLogo('/bankLogo/saman - www-tejiran-ir.png')
            setLogoName('Saman')
            break; 
        case 639346:
            setLogo('/bankLogo/sina - www-tejiran-ir.png')
            setLogoName('Sina')
            break; 
        case 639607:
            setLogo('/bankLogo/sarmaye - www-tejiran-ir.png')
            setLogoName('Sarmaye')
            break; 
        case 502806:
            setLogo('/bankLogo/shahr - www-tejiran-ir.png')
            setLogoName('Shahr')
            break; 
        case 502938:
            setLogo('/bankLogo/dey - www-tejiran-ir.png')
            setLogoName('Dey')
            break; 
        case 603769:
            setLogo('/bankLogo/saderat - www-tejiran-ir.png')
            setLogoName('Saderat')
            break; 
        case 610433:
            setLogo('/bankLogo/mellat - www-tejiran-ir.png')
            setLogoName('Mellat')
            break; 
        case 627353:
            setLogo('/bankLogo/tejarat - www-tejiran-ir.png')
            setLogoName('Tejarat')
            break; 
        case 589463:
            setLogo('/bankLogo/refah - www-tejiran-ir.png')
            setLogoName('Refah')
            break; 
        case 639370:
            setLogo('/bankLogo/mehr eghtesad - www-tejiran-ir.png')
            setLogoName('Mehr Eghtesad')
            break; 
        case 627381:
            setLogo('/bankLogo/ansar - www-tejiran-ir.png')
            setLogoName('Ansar')
            break; 
        default:
            return 
    } 
    }else{
        setLogo('')
    } 
  

  },[cardNumber])
  return (
      <AddDiv>
  {/* Alert */}
        <Collapse in={a===1} sx={{width:'100%',display: a===1? 'block' : 'none'}} color='error'>
      <Alert severity="error" sx={{backgroundColor:'rgb(22,11,11)',color: 'rgb(220,178,178)',fontWeight: 600}} action={
        <IconButton
            color="inherit"
            size="small"
            onClick={()=> setA(0)}
        >
            <CloseIcon fontSize="inherit" />
        </IconButton>
      }>
        
        The card information not correctly formatted !
      </Alert>
        </Collapse>
        <Collapse in={a===2} sx={{width:'100%',display: a===2? 'block' : 'none'}} color='error'>
      <Alert severity="success" sx={{backgroundColor:'rgb(12,19,13)',color: 'rgb(195,222,196)',fontWeight: 600}} action={
        <IconButton
            color="inherit"
            size="small"
            onClick={()=> setA(0)}
        >
            <CloseIcon fontSize="inherit" />
        </IconButton>
      }>
          successfully !
      </Alert>
        </Collapse>   
  {/* Card Name */}      
        <Input  placeholder='Card Name' value={cardName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCardName(regex.test(e.target.value)? cardName :e.target.value.length > 15?cardName: e.target.value)}></Input>
  {/* Card Number */}
        <DivImg>
          <img src={logo} alt='logo' style={{display: logo? 'flex': 'none'}}/>
        <Input placeholder={'Card Number'} value={cardNumber} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCardNumber(regex2.test(e.target.value)? cardNumber:e.target.value.length>16?cardNumber: e.target.value )} onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>e.which === 32? e.preventDefault():''}></Input>
        </DivImg>    
  {/* Date */}
      <DivData >
        <Input width={'50%'} placeholder='Cvv2' value={cvv2} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCvv2(regex2.test(e.target.value)? cvv2:e.target.value.length > 4?cvv2: e.target.value)}onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>e.which === 32? e.preventDefault():''}></Input>
        <Input width={'20%'} placeholder='YY' value={expY} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setExpY(regex2.test(e.target.value)? expY:e.target.value.length > 2?expY: e.target.value)}onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>e.which === 32? e.preventDefault():''} ></Input>
        <Input width={'20%'} placeholder='MM' value={expM} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setExpM(regex2.test(e.target.value)? expM:e.target.value>='12' ? '12': e.target.value.length > 2?expM: e.target.value)}onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>e.which === 32? e.preventDefault():''} ></Input>
      </DivData>  
  {/* Amount */}
        <Input placeholder='Amount' value={asset===0?'':asset} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setAsset(regex2.test((e.target.value))? asset:e.target.value.length>=10? asset: +(e.target.value))} ></Input>   
  {/* Btn */}   
      
      <Btn onClick={add} ><AddCircleOutlineSharpIcon fontSize={'medium'}/> ADD</Btn>
      </AddDiv>  
  )
}
