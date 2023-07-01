import { useTheme } from '@emotion/react';
import { Avatar, Box, Typography } from '@mui/material';
// import PropTypes from 'prop-types';
export const MessageItem = ({ messageItem }) => {
    const theme = useTheme();

    const direction = () => {
        if (messageItem.isAdmin) {
            return 'row-reverse';
        } else {
            return 'row';
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: direction(),
            alignItems: 'center',
            gap: '10px',
            bgcolor: theme.palette.background.window,
            padding: '20px',
            borderRadius: '7px',
            position: 'relative'
        }} >
            <Avatar>H</Avatar>
            <Box>
                <Typography>{name}</Typography>
                <Typography>{messageItem.message}</Typography>
            </Box>
        </Box>
    );
};

// MessageItem.propTypes = {
//     messageText: PropTypes.string
// };