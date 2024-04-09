import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    

    if (localStorage.loginToken) {
        return <Outlet />
    } else {
        return <Navigate to='/Login' />
    }



}

export default PrivateRoutes