import { Link } from '@mui/material';


export const ChatList = () => {
    return (
        <div>
          Chat List
            <ul>
                <li>
                    <Link href="/123">To Room</Link>
                </li>
                <li>
                    <Link href="/signin">To SignIn</Link>
                </li>
                <li>
                    <Link href="/signup">To SignUp</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
};