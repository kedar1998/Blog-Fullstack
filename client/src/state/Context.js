import React, {createContext, useContext, useReducer} from 'react'
import reducer from './reducer'
import axios from 'axios'

const initialState = {
    count: 0,
}

const appContext = createContext()

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const register = async (currentUser) =>{
       
        try{
            const response = await axios.post('/api/v1/user/register', currentUser)
            console.log(response);
        }
        catch (err){
            console.log(err.response.data.msg);
        }
    }

    

  return (
    <appContext.Provider value={{...state, register}}>
        {children}
    </appContext.Provider>
  )
}


const useAppcontext = () =>{
    return useContext(appContext)
}


export {Context, useAppcontext}