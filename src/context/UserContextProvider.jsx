import React, { Children, useEffect, useState } from 'react'
import UserContext from './UserContext.js'
import axiosInstance from '../utils/axiosInstance.js';

function UserContextProvider({children}) {
    const [loggedIn,setLoggedIn] = useState(false)
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        try {
            const status = async()=>{
                const response = await axiosInstance.get("/users/login-status");
                setLoggedIn(response.data)
                //console.log(response.data)
            }
            const userDetails = async()=>{
              try {
                const resp = await axiosInstance.get("/users/details");
                setUser(resp.data.data)
                //console.log(resp.data.data)
              } catch (error) {
                console.log(err)
              }
            }
            status()
            userDetails()
          
        } catch (error) {
          console.log(error)
        }
        
    },[])

  return (
    <UserContext.Provider value={{loggedIn,setLoggedIn,user,setUser,loading,setLoading}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;