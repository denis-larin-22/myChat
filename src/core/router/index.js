/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../../views/Root';
import AuthSignIn from '../../views/auth/SignIn';
import AuthSignUp from '../../views/auth/SignUp';
import { AuthForgot } from '../../views/auth/Forgot';
import { ChatList, ChatRoom } from '../../views/chat/index';
import { UserProfile } from '../../views/user/Profile/index.jsx';



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                index: true,
                element: <ChatList />,
            },
            {
                path: ':roomId',
                element: <ChatRoom />,
            },
            {
                path: '/profile',
                element: <UserProfile />,
            },
        ],
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
    {
        path: '/profile',
        element: <UserProfile />,
    },
]);
