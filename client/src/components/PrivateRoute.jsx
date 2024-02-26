import React from "react"
import { Route, Navigate } from 'react-router-dom'
import {jwtDecode} from "jwt-decode"


const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    if(token){
        try{
            const decodedToken = jwtDecode(token)
            const currentTime = Date.now()/1000
            if (decodedToken.exp<currentTime){
                localStorage.removeItem('token')
                return false
            }
            return true
        }catch(err){
            return false
        }
    }
    else{
        return false
    }
}

const PrivateRoute = ({ element, ...rest }) => {
    return (
      <Route
        {...rest}
        element={isAuthenticated() ? element : <Navigate to="/login" />}
      />
    );
  };

export default PrivateRoute
