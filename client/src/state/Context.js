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
            // const response2 = await axios.get('/api/v1/blog/getAllBlogs')
            console.log(response);
            // console.log(response2);
        }
        catch (err){
            console.log(err.response.data.msg);
        }
    }

    const loginUser = async (currentUser) =>{
        const response = await axios.post("/api/v1/user/login", currentUser)
        console.log(response);
    }

    

  return (
    <appContext.Provider value={{...state, register, loginUser}}>
        {children}
    </appContext.Provider>
  )
}


const useAppcontext = () =>{
    return useContext(appContext)
}


export {Context, useAppcontext}