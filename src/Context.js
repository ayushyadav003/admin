import { createContext } from "react";
import { useState } from "react/cjs/react.development";


export const InputContext = createContext(null)


export const ContextProvider = ({ children }) =>{

    const[input, setInput] = useState(null)

    return(
        <InputContext.Provider value={{input, setInput}}>
            {children}
        </InputContext.Provider>
    )
}
