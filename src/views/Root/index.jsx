import Box from '@mui/material/Box';
import 'reset-css';

// import { Header } from './components/Header';
// import { Outlet } from 'react-router';
import { RoomList } from '../chat/Room/RoomList';
import { ActiveRoom } from '../chat/Room/ActiveRoom';
// import { ActiveRoom } from '../chat/Room/ActiveRoom';

export const Root = () => {
    return (
        <Box maxWidth='lg' sx={{
            minHeight: '100vh',
            minWidth: '100vw',
            backgroundColor: '#ffb74d',
            padding: '0',
            display: 'grid',
            gridTemplateColumns: '400px 1fr',
            gridTemplateRows: '60px',
        }}>
            <Box sx={{
                gridArea: '1 / 1 / 2 / 6',
                bgcolor: '#2C387E',
            }}>
                <a href="/">Home</a><a href="/">About</a><a href="/">Contact</a>
            </Box>
            <Box sx={{
                gridArea: '2 / 1 / 6 / 2',
                bgcolor: '#3f51b5',
            }}>
                <RoomList />
            </Box>
            <Box sx={{
                gridArea: '2 / 2 / 6 / 6',
                border: '10px solid black'
            }}>
                <ActiveRoom />
            </Box>
        </Box>
    );
};