import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const {user} = useSelector((store:any) =>  store.user)

    return (
        <div>
            {user ? <Outlet /> : <Navigate to={'/login'}/>}
        </div>
    )
}

export default PrivateRoutes