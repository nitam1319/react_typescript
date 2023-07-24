import React, { useContext, useMemo,useState } from 'react'
import { bankContext, bank_type } from './BankContext'
import { Alert, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField ,Collapse, useMediaQuery, useTheme} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Unstable_Grid2'
import { useDispatch, useSelector } from 'react-redux';
import { bank_interface, internalPay, externalPay } from '../Redux/Reducers/BankReducer';
import { state_type } from '../Redux/Store/Store';


export default function BankPay() {
  const index = useSelector((state:state_type)=>state.root.bank.indexCard)
  const list = useSelector((state:state_type)=>state.root.bank.bankList)
  const dispatch = useDispatch()
  const regex2 = /[(\]!@#$%^&*()\._+=<>{}[)\\e'"`~/,|;:?\\-]|[A-Za-z]+/
  const[cardNumber3 , setCardNumber3] = useState<string>('')
  const[asset2, setAsset2] = useState<number>(0)
  const[logo2 , setLogo2] = useState<string>('')
  const[pass , setPass] = useState<string>('')
  const [s, setS] = useState(false)
  const [l, setL] = useState(false)
  const [a, setA] = useState(0)
  const t = useTheme()
  const rm = useMediaQuery(t.breakpoints.down('md'))
  function pay(){
    if(index === -1 ||list[index].name === ''||asset2 > list[index].assets){
      setA(1)
    }else if(cardNumber3.length !== 16 || pass.length<4){
      setA(2)
    }else if(cardNumber3 === list[index].num || logo2 === ''){
      setA(3)
    }else if(!list[index].num){
      setA(4)
    }else if(list.findIndex(item=>item.num === cardNumber3) !== -1){
        let h = {mony: asset2, num1: list[index].num ,num2: cardNumber3, logo:logo2} 
        dispatch(internalPay(h))
        setPass('')
        setAsset2(0)
        setCardNumber3('')
        setA(5)
    } else{
      let h = {mony: asset2, num1: list[index].num ,num2: cardNumber3, logo:logo2} 
      dispatch(externalPay(h))
      setPass('')
      setAsset2(0)
      setCardNumber3('')
      setA(5)
    }
  }
  useMemo(()=>{
    setTimeout(()=>{setA(0)}, 5000)
  },[a])
  useMemo(()=>{
    setTimeout(()=>{setL(false)}, 5000)
  },[l])
  useMemo(()=>{
    if(cardNumber3.length > 5){
      let sixFirstNum2 = cardNumber3.slice(0,6)
      switch (+(sixFirstNum2)) {
        case 603799:
            setLogo2('/bankLogo/melli - www-tejiran-ir.png')
            break;
        case 589210:
            setLogo2('/bankLogo/589210.png')
            break; 
        case 627648:
            setLogo2('/bankLogo/saderat - www-tejiran-ir.png')
            break; 
        case 627961:
            setLogo2('/bankLogo/sanat o madan-www-tejiran-ir.png')
            break; 
        case 603770:
            setLogo2('/bankLogo/keshavarzi-www-tejiran-ir.png')
            break; 
        case 628023:
            setLogo2('/bankLogo/maskan - www-tejiran-ir.png')
            break; 
        case 627760:
            setLogo2('/bankLogo/post.png')
            break; 
        case 502908:
            setLogo2('/bankLogo/tosee-taavon-www-tejiran-ir.png')
            break; 
        case 627412:
            setLogo2('/bankLogo/eghtesad - www-tejiran-ir.png')
            break; 
        case 622106:
            setLogo2('/bankLogo/parsian - www-tejiran-ir.png')
            break; 
        case 502229:
            setLogo2('/bankLogo/pasargad-www-tejiran-ir.png')
            break; 
        case 627488:
            setLogo2('/bankLogo/karafarin - www-tejiran-ir.png')
            break; 
        case 621986:
            setLogo2('/bankLogo/saman - www-tejiran-ir.png')
            break; 
        case 639346:
            setLogo2('/bankLogo/sina - www-tejiran-ir.png')
            break; 
        case 639607:
            setLogo2('/bankLogo/sarmaye - www-tejiran-ir.png')
            break; 
        case 502806:
            setLogo2('/bankLogo/shahr - www-tejiran-ir.png')
            break; 
        case 502938:
            setLogo2('/bankLogo/dey - www-tejiran-ir.png')
            break; 
        case 603769:
            setLogo2('/bankLogo/saderat - www-tejiran-ir.png')
            break; 
        case 610433:
            setLogo2('/bankLogo/mellat - www-tejiran-ir.png')
            break; 
        case 627353:
            setLogo2('/bankLogo/tejarat - www-tejiran-ir.png')
            break; 
        case 589463:
            setLogo2('/bankLogo/refah - www-tejiran-ir.png')
            break; 
        case 639370:
            setLogo2('/bankLogo/mehr eghtesad - www-tejiran-ir.png')
            break; 
        case 627381:
            setLogo2('/bankLogo/ansar - www-tejiran-ir.png')
            break; 
        default:
            return 
    } 
    }else{
        setLogo2('')
    } 
  },[cardNumber3])

  return (
    <div className="divB3">
      <Grid
        container
        xs={12}
        direction="column"
        justifyContent="space-around"
        alignItems="center" 
        wrap='nowrap'
        
        spacing={rm?a?0.5:1.5:a?1:2}
      >
  {/* Alert */}
        <Grid xs={12}>
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
              Your account balance is insufficient
            </Alert>
          </Collapse>
          <Collapse in={a===2} sx={{width:'100%',display: a===2? 'block' : 'none'}} color='error'>
            <Alert severity="error" sx={{backgroundColor:'rgb(22,11,11)',color: 'rgb(220,178,178)',fontWeight: 600}} action={
              <IconButton
                  color="inherit"
                  size="small"
                  onClick={()=> setA(0)}
              >
                  <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
              The card information not correctly formatted
            </Alert>
          </Collapse>
          <Collapse in={a===3} sx={{width:'100%',display: a===3? 'block' : 'none'}} color='error'>
            <Alert severity="error" sx={{backgroundColor:'rgb(22,11,11)',color: 'rgb(220,178,178)',fontWeight: 600}} action={
              <IconButton
                  color="inherit"
                  size="small"
                  onClick={()=> setA(0)}
              >
                  <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
               The transaction is not valid
            </Alert>
          </Collapse>
          <Collapse in={a===4} sx={{width:'100%',display: a===4? 'block' : 'none'}} color='error'>
            <Alert severity="error" sx={{backgroundColor:'rgb(22,11,11)',color: 'rgb(220,178,178)',fontWeight: 600}} action={
              <IconButton
                  color="inherit"
                  size="small"
                  onClick={()=> setA(0)}
              >
                  <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
               Please select a card
            </Alert>
          </Collapse>
          <Collapse in={a===5} sx={{width:'100%',display: a===5? 'block' : 'none'}} color='error'>
            <Alert severity="success" sx={{backgroundColor:'rgb(12,19,13)',color: 'rgb(195,222,196)',fontWeight: 600}} action={
              <IconButton
                  color="inherit"
                  size="small"
                  onClick={()=> setA(0)}
              >
                  <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
               Payment was successfully !
            </Alert>
          </Collapse>
        </Grid>
  {/* Card Name */}
        <Grid xs={12} sm={7}>
          <TextField
            sx={{input: { color: '#fff' }, width: '100%'}}
            label="Card Name"
            value={index !== -1? list[index].name : ''}
            variant="filled"
            color='error'
          />
        </Grid>
  {/* Card Number */}
        <Grid xs={12} sm={7}>
          <TextField
            sx={{input: { color: '#fff' }, width: '100%'}}
            label="Card Number"
            value={index !== -1? list[index].num : ''}
            variant="filled"
            color='error'
          />
        </Grid>
  {/* Destination Card Number */}
        <Grid xs={12} sm={7}>
          <div className="divinpBB">
            <img  alt="logo2" src={logo2} style={{display: logo2? 'flex': 'none'}}/>
            <TextField
              sx={{input: { color: '#fff' }, width:!logo2? '100%':'95%'}}
              label="Destination Card Number"
              value={cardNumber3}
              onChange={(e)=> setCardNumber3(regex2.test(e.target.value)? cardNumber3:e.target.value.length>16?cardNumber3: e.target.value )} onKeyDown={e=>e.which === 32? e.preventDefault():''} 
              variant="filled"
              color='error'
            />
          </div> 
        </Grid>
  {/* Password */}
        <Grid xs={12} sm={7}>
          <FormControl variant="filled" color='error' sx={{input: { color: '#fff' },width: '100%'}} >
          <InputLabel htmlFor="Password"  >Password</InputLabel>
          <FilledInput
            id="Password"
            color='error'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            type={s? 'text' : 'password'}
            endAdornment={
                <InputAdornment position='end'>
              <IconButton 
                onClick={()=> setS(!s)}
                edge="end"
              >
                  {s ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
        </Grid>
  {/* Amount */}
        <Grid xs={12} sm={7}>
          <TextField
            sx={{input: { color: '#fff' }, width: '100%'}}
            label="Amount"
            value={asset2===0?'':asset2}
            onChange={(e)=> setAsset2(regex2.test((e.target.value))? asset2:e.target.value.length>=10? asset2: +(e.target.value))} 
            variant="filled"
            color='error'
          />
        </Grid>
  {/* Btn */}
        <Grid xs={12} sm={7}>
          <LoadingButton 
            color='secondary' 
            size='large' 
            variant='contained' 
            sx={{width:'100%',borderRadius:3,fontSize: 22}} 
            endIcon={<SendSharpIcon fontSize={'large'}/>} 
            loading={l} 
            onClick={()=>{setL(true);pay();{<Alert severity="error">This is an error alert — check it out!</Alert>}}}
            loadingPosition="center">
              <span>Pay</span>
          </LoadingButton>
        </Grid>
      </Grid>
    </div>
  )
}
