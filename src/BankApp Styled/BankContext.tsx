import { createContext, useState } from "react";
export interface bank_list{
    id:number;
    name:string;
    num:string;
    cvv:string;
    expM:string;
    expY:string;
    assets:number;
    logoB:string;
    ln:string;
    history: bank_history_list[]
}
export interface bank_history_list{
    mony:number;
    num1:string;
    num2:string;
    logo:string;
    
}
type  con ={
    children: React.ReactNode
}
export const bankContext = createContext<null|bank_type >(null)
export type bank_type = {
    list: bank_list[];
        setList: React.Dispatch<React.SetStateAction<bank_list[]>>;
    cardNumber: string;
        setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    cardNumber2: string;
        setCardNumber2: React.Dispatch<React.SetStateAction<string>>;
    cardNumber3: string;
        setCardNumber3: React.Dispatch<React.SetStateAction<string>>;
    cardName: string;
        setCardName: React.Dispatch<React.SetStateAction<string>>;
    cardName2: string;
        setCardName2: React.Dispatch<React.SetStateAction<string>>;
    cvv2: string;
        setCvv2: React.Dispatch<React.SetStateAction<string>>;
    expM: string;
        setExpM: React.Dispatch<React.SetStateAction<string>>;
    expY: string;
        setExpY: React.Dispatch<React.SetStateAction<string>>;
    asset: number;
        setAsset: React.Dispatch<React.SetStateAction<number>>;
    index: number;
        setIndex: React.Dispatch<React.SetStateAction<number>>;
    logo: string;
        setLogo: React.Dispatch<React.SetStateAction<string>>;
    asset2: number;
        setAsset2: React.Dispatch<React.SetStateAction<number>>;
    logo2: string;
        setLogo2: React.Dispatch<React.SetStateAction<string>>;
    logoName: string;
        setLogoName: React.Dispatch<React.SetStateAction<string>>;
    pass: string;
        setPass: React.Dispatch<React.SetStateAction<string>>;
}
const BankContext = ({children}:con)=>{
    const[list , setList] = useState<bank_list[]>([])
    const[cardNumber , setCardNumber] = useState<string>('')
    const[cardNumber2 , setCardNumber2] = useState<string>('')
    const[cardNumber3 , setCardNumber3] = useState<string>('')
    const[cardName , setCardName] = useState<string>('')
    const[cardName2 , setCardName2] = useState<string>('')
    const[cvv2 , setCvv2] = useState<string>('')
    const[expM , setExpM] = useState<string>('')
    const[expY , setExpY] = useState<string>('')
    const[asset, setAsset] = useState<number>(0)
    const[asset2, setAsset2] = useState<number>(0)
    const[index, setIndex] = useState<number>(-1)
    const[logo , setLogo] = useState<string>('')
    const[logoName , setLogoName] = useState<string>('')
    const[logo2 , setLogo2] = useState<string>('')
    const[pass , setPass] = useState<string>('')
    return(
        <bankContext.Provider 
            value={{
                list , 
                    setList,
                cardNumber ,
                    setCardNumber,
                cardName , 
                    setCardName,
                cardName2 , 
                    setCardName2,
                cvv2 , 
                    setCvv2,
                expM , 
                    setExpM,
                expY , 
                    setExpY,
                asset, 
                    setAsset,
                logo , 
                    setLogo,
                cardNumber2 ,
                    setCardNumber2,
                cardNumber3 , 
                    setCardNumber3,
                asset2,
                    setAsset2,
                index,
                    setIndex,
                logo2 ,
                    setLogo2,
                logoName ,
                    setLogoName,
                pass , 
                    setPass,
            }}>
            {children}
        </bankContext.Provider>
    )
}
export default BankContext