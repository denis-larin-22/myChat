import { Box, Typography } from '@mui/material';
// import PropTypes from 'prop-types';

export const MessageItem = ({ messageText }) => {
    return (
        <Box sx={{
            bgcolor: 'rgba(68, 70, 84, 1)',
            padding: '20px',
            borderRadius: '7px'
        }} >
            <Typography variant="body1">
                {messageText}
            </Typography>
        </Box>
    );
};

// MessageItem.propTypes = {
//     messageText: PropTypes.string
// };