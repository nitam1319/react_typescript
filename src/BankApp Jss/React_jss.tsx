import { createUseStyles,useTheme} from "react-jss";
interface ButtonProps {
    children?: React.ReactNode;
    width?: string;
    placeholder?: string;
    val?: string | number;
    type?: string;
    Click?: React.MouseEventHandler<HTMLButtonElement>  
    ClickD?:  React.MouseEventHandler<HTMLDivElement> 
    Change?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    KeyDown?:React.KeyboardEventHandler<HTMLInputElement> | undefined;
    ContextMenu?:React.MouseEventHandler<HTMLButtonElement> | undefined;
  }
interface theme0{
    BBg: string; 
    inpBg: string; 
    inpBColor: string;
    color:  string;
    ABg: string;  
    BDBg: string;
    CC: string;
    CBg: string;
    BgA: string;
}
const styles = createUseStyles((theme:theme0)=>({
    Btn:{
        backgroundColor: theme.BBg,
        borderRadius: '10px',
        width: '100%',
        height: '50px',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        border: 'none',
        '&:hover':{
          height: 53,
          boxShadow:[ 5 ,5 ,5, theme.BBg + 'a2'],
          backgroundColor: theme.BBg + 'd6',
          transition: 'all 0.5s ',
        }
    },
    Inp:{
        backgroundColor: theme.inpBg,
        borderRadius: 3,
        border:'none',
        borderBottom: [1 ,'solid'],
        borderBottomColor: 'theme.inpBColor',
        width: '100%',
        height: 50,
        color: theme.color,
        outline: 'none',
        fontSize: 'medium',
        padding: 10,
        '&:hover':{
          height: 55,
          borderBottom: [3 , 'solid' , 'red'],
          transition: 'all 0.5s ',
        },
        '&:focus':{
          fontWeight: 'bold',
          height: 55,
          borderBottom: [3 , 'solid' ,'red'],
          transition: 'all 1s ease',
          '&::-webkit-input-placeholder':{
            color: '#ff0000c9',
            fontSize: 'medium',
            transition: 'all 0.5S ',
        }
        },
        '&::-webkit-input-placeholder':{
            color: theme.color,
            fontSize: 'small',
        }
    },
    DivInps:{
        alignSelf: 'center',
        width: '60%',
        height: '66%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: 7,
        overflowY: 'auto',
        overflowX: 'hidden',
        '@media (max-width: 550px)': {
         width: '100% ',
        }
    },
    DivImg:{
        width: '100%',
        height: 50,
        border: 'none',
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
    },
    DivD:{
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Div:{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 60,
        backgroundColor: theme.BgA,
        alignItems: 'center',
        justifyContent: 'center',
    },
    DivAll:{
        width: '60%',
        height: 720,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: theme.ABg,
        marginTop: -20,
        paddingTop: 10,
        '@media (max-width: 1200px)': {
            width: '80%',
        },
        '@media (max-width: 700px)': {
            width: '90%',
        },
        '@media (max-width: 500px)': {
            width: '100%',
            borderRadius: 0,
        },
    },
    DivCL:{
        width: '100%',
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        overflowY: 'hidden',
    },
    BD:{
        backgroundColor: theme.BDBg,
        width: '100%',
    },
    DC:{
        position: 'relative',
        height: 190,
        backgroundSize: 'cover',
        padding: 25,
        borderRadius: 28,
        minWidth: 350,
        marginLeft: 10,
        marginRight: 10,
        boxShadow: [0 ,5, 10, 'rgba(0, 0, 0, 0.5)'],
        resize: 'none',
        color:theme.CC,   
        backgroundColor: theme.CBg ,
        '@media (max-width:350px)': {
           minWidth: 260,
           marginLeft: 3,
           marginRight: 3,
        }
    }
}))
export function BTN ({children,...props}:ButtonProps){
    const theme = useTheme<any> ()
    const C = styles(theme)
    return(
        <button onClick={props.Click} onContextMenu={props.ContextMenu} className={C.Btn} >{children}</button>
    )
}
export function Inp ({children , ...props}: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme)
    return(
        <input type={props.type} value={props.val} className={C.Inp} style={{width:props.width}} placeholder={props.placeholder} onChange={props.Change} onKeyDown={props.KeyDown}>{children}</input>
    )
}
export function DivInps({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.DivInps}>{children}</div>
    )
}
export function DivImg({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.DivImg}>{children}</div>
    )
}
export function Div({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.Div}>{children}</div>
    )
}
export function DivAll({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.DivAll}>{children}</div>
    )
}
export function DivCL({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.DivCL}>{children}</div>
    )
}
export function DC({ children , ...props }: ButtonProps): React.ReactElement{
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
       <div className={C.DC} onClick={props.ClickD} >{children}</div> 
    )
}
export function BD({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.BD} >{children}</div>
    )
}
export function DivD({ children }: ButtonProps){
    const theme = useTheme<any>()
    const C = styles(theme) 
    return(
        <div className={C.DivD}>{children}</div>
    )
}