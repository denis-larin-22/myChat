import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';

import { useState } from 'react';

export const ActiveRoomForm = ({ sendHandler }) => {
    const [inputText, setInputText] = useState('');

    const sendBtnHandler = () => {
        if (!inputText) return;
        sendHandler(inputText);
        setInputText('');
    };

    const theme = useTheme();

    return (
        <Box sx={{
            position: 'relative',
            backgroundColor: theme.palette.background.default
        }}>
            <TextField
                label={'Enter a message'}
                variant="filled"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                multiline={true}
                fullWidth={true}
            />
            <IconButton onClick={sendBtnHandler} variant="contained" aria-label="send" size="large" sx={{
                position: 'absolute',
                right: '0'
            }}>
                <SendIcon sx={{
                    color: theme.palette.primary.main
                }} />
            </IconButton>
        </Box>
    );
};