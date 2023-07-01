import { Box, FormControlLabel, Link, Switch, Tooltip } from '@mui/material';
import { RoomList } from '../../chat/Room/RoomList';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Sidebar = () => {
    return (
        <Box sx={{
            height: '100%',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <RoomList />
            <Box component={'nav'}>
                <Tooltip title={'Turn on light mode'}>
                    <FormControlLabel control={<Switch defaultChecked />} label="light mode" />
                </Tooltip>
                <Tooltip title={'Logout'}>
                    <Link href='/'>
                        <LogoutOutlinedIcon />
                    </Link>
                </Tooltip>
            </Box>
        </Box>
    );
};