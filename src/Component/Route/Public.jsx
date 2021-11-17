import {Outlet, Navigate, useLocation} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

function Public(){

    let [token] = useAuth()

    const {pathname} = useLocation()

    if(token && pathname === '/login'){
        return <Navigate to="/"/>
    }

    return <Outlet/>
    
}

export default Public;