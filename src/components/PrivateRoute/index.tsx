// PrivateRoute.js
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface IPrivateRouteProps {
    element: ReactNode;
}

const PrivateRoute = ({ element }: IPrivateRouteProps) => {
    // componente de rota protegida, verifica se está autenticado antes de renderizar a tela, se não, redireciona para a tela de login
    const { isAuth } = useAuth();
    
    return isAuth ? element : <Navigate to='/login' />;
};

export default PrivateRoute;
