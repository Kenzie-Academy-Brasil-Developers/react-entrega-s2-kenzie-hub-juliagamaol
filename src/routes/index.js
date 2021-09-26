import { useEffect, useState } from "react";
import { Switch,Route } from "react-router-dom";
import {Home} from '../pages/Home'
import { Login } from "../pages/Login";
import {Register} from '../pages/Register'
import {Dashboard} from '../pages/Dashboard'

export const Routes =() =>{
    const[authenticated, setAuthenticated] = useState(false)
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('@user:token'))

        if(token){
            return setAuthenticated(true)
        }
    },[authenticated])
    return(
        <Switch>
            <Route exact path="/">
                <Home authenticated={authenticated}/>
            </Route>

            <Route path="/login">
                <Login 
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}/>
            </Route>

            <Route path="/register">
                <Register authenticated={authenticated}/>
            </Route>

            <Route path="/dashboard">
                <Dashboard authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}