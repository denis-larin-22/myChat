import { Avatar, Box, Typography } from '@mui/material';
import { RoomItemButton } from './RoomItemButton';

export const RoomItem = () => {
    return (
        <Box sx={{
            bgcolor: 'rgba(68, 70, 84, 1)',
            width: '320px',
            padding: '15px',
            borderRadius: '10px',
            display: 'grid',
            gridTemplateAreas: '\'avatar name\' \'avatar text\'',
            gap: '0 10px',
            alignItems: 'center',
            color: 'rgba(236, 236, 241, 1)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Avatar sx={{
                gridArea: 'avatar',
                width: '50px',
                height: '50px'
            }}>H</Avatar>
            <Typography variant="h6" sx={{ gridArea: 'name' }}>Denis</Typography>
            <Typography variant="p" sx={{ gridArea: 'text' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </Typography>
            <RoomItemButton />
        </Box>
    );
};