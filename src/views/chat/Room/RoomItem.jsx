import { Avatar, Box, Typography } from '@mui/material';
import { RoomItemButton } from './RoomItemButton';
import theme from '../../../core/theme';

export const RoomItem = () => {
    return (
        <Box sx={{
            bgcolor: theme.palette.background.window,
            width: '100%',
            padding: '15px',
            borderRadius: '10px',
            display: 'grid',
            gridTemplateAreas: '\'avatar name\' \'avatar text\'',
            gap: '0 10px',
            alignItems: 'center',
            color: theme.palette.text.primary,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Avatar sx={{
                gridArea: 'avatar',
                width: '50px',
                height: '50px'
            }}>H</Avatar>
            <Typography variant="subtitle1" sx={{ gridArea: 'name' }}>Denis</Typography>
            <Typography variant="subtitle2" sx={{ gridArea: 'text' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </Typography>
            <RoomItemButton />
        </Box>
    );
};