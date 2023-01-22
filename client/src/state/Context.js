import React, {createContext, useContext, useReducer} from 'react'
import reducer from './reducer'

const initialState = {
    count: 0,
}

const appContext = createContext()

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const add = () =>{
        dispatch({type: "add"})
    }

  return (
    <appContext.Provider value={{...state, add}}>
        {children}
    </appContext.Provider>
  )
}


const useAppcontext = () =>{
    return useContext(appContext)
}


export {Context, useAppcontext}