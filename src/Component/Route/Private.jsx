import {Outlet, Navigate, useLocation} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';


function Private(){
    
    let [token] = useAuth()
 
    if(token){
        return <Outlet/> 
    }
    return <Navigate to="/login"/>

}

export default Private;