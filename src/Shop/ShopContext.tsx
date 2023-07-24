import { createContext, useState } from "react";

export type Shop_interface ={
    id:number;
    txt:string;
    conter: number;
}

export const shopContext = createContext<SCT | null>(null)
type con ={
    children: React.ReactNode
}
export type SCT ={
    list: Shop_interface[];
    setList: React.Dispatch<React.SetStateAction<Shop_interface[]>>;
    conter: number;
    setConter: React.Dispatch<React.SetStateAction<number>>;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
    ind: number;
    setInd: React.Dispatch<React.SetStateAction<number>>;
}
const ShopContext = ({children}:con) => {
    const[list , setList] = useState<Shop_interface[]>([])
    const[conter ,setConter] = useState<number>(0)
    const[ind ,setInd] = useState<number>(0)
    const[text ,setText] = useState<string>('')
    const[flag ,setFlag] = useState<boolean>(false)

     return(
        <shopContext.Provider
        value={{
            list,
            setList,
            conter ,
            setConter,
            text ,
            setText,
            flag ,
            setFlag,
            ind ,
            setInd,

        }}>
            {children}
        </shopContext.Provider>
     )
}
export default ShopContext