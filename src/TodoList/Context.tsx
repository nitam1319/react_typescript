import React, { createContext, useState } from "react";
import Todo from "./TodoListInterface";

export type initial_state = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  id: number ;
  setId: React.Dispatch<React.SetStateAction<number>>;
  color: number;
  setColor: React.Dispatch<React.SetStateAction<number>>;
}

export const context = createContext<initial_state | null>(null);
type con = {
  children: React.ReactNode;
};
const Context = ({ children }: con) => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState<number>(0);
  const [color, setColor] = useState(0);
  const [list, setList] = useState<Todo[]>([]);

  return (
    <context.Provider
      value={{
        text,
        setText,
        list,
        setList,
        flag,
        setFlag,
        id,
        setId,
        color,
        setColor,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
