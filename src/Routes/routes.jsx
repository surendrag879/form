import { useRoutes } from 'react-router-dom';

//routes
import AuthenticationRoutes from './autheticationRoutes';
import MainRoutes from './mainRoutes';

const Routes = () => useRoutes([MainRoutes, AuthenticationRoutes]);

export default Routes;
