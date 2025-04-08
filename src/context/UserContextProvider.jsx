import React, { Children, useEffect, useState } from 'react'
import UserContext from './UserContext.js'
import axiosInstance from '../utils/axiosInstance.js';

function UserContextProvider({children}) {

    const [loggedIn,setLoggedIn] = useState(false)
    
    useEffect(()=>{
        try {
            const status = async()=>{
                const response = await axiosInstance.get("/users/login-status");
                setLoggedIn(response.data)
            }
            status()
          
        } catch (error) {
          console.log(error)
        }
        
    },[])

  return (
    <UserContext.Provider value={{loggedIn,setLoggedIn}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;