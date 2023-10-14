import { Outlet, Navigate } from 'react-router-dom';
import userLogin from '../components/Login/LoginForm';

const useAuth = () => {
    const user = { loggedIn: {userLogin} };
    return user && user.loggedIn;
}

const PrivateRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/Login" />
}

export default PrivateRoutes