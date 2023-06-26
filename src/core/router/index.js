import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../../views/Root';
import AuthSignIn from '../../views/auth/SignIn';
import AuthSignUp from '../../views/auth/SignUp';
import { AuthForgot } from '../../views/auth/Forgot';



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>
    },
    {
        path: '/signin',
        element: <AuthSignIn/>,
    },
    {
        path: '/signup',
        element: <AuthSignUp/>,
    },
    {
        path: '/forgot',
        element: <AuthForgot />,
    },
]);