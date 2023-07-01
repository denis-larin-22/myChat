import Box from '@mui/material/Box';
import 'reset-css';
import './index.css';

// import { Header } from './components/Header';
// import { Outlet } from 'react-router';
import { ActiveRoom } from '../chat/Room/ActiveRoom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import theme from '../../core/theme';
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
            <Box component={'header'} sx={{
                gridArea: '1 / 1 / 2 / 6',
                bgcolor: '#2C387E',
            }}>
                <Header />
            </Box>
            <Box component={'section'} sx={{
                gridArea: '2 / 1 / 6 / 2',
                bgcolor: theme.palette.background.paper,
            }}>
                <Sidebar />
            </Box>
            <Box sx={{
                gridArea: '2 / 2 / 6 / 6',
                bgcolor: theme.palette.background.default,
            }}>
                <ActiveRoom />
            </Box>
        </Box>
    );
};