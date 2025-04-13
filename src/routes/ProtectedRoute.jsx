import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({allowRoles}) => {
    const {isLoggedIn, userRole} = useSelector(state=>state.auth);

    !isLoggedIn && <Navigate to="/" />;
    !allowRoles?.includes(userRole) &&  <Navigate to="/" />;

    return <Outlet />;
}

export default ProtectedRoute;