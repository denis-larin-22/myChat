import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';

import { useState } from 'react';

export const ActiveRoomForm = () => {
    const [inputText, setInputText] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState({ error: false, label: 'Send a message' });

    const onChangeHandler = (inputValue) => {
        if (!inputValue) return;
        setInputText(inputValue);
        setIsInputEmpty({ error: false, label: 'Send a message' });
    };

    const sendHandler = () => {
        if (!inputText) {
            setIsInputEmpty({ error: true, label: 'Please enter a message' });
            return;
        }
        setInputText('');
    };

    const theme = useTheme();

    return (
        <Box sx={{
            position: 'relative',
            backgroundColor: 'rgba(64, 65, 78, 1)'
        }}>
            <TextField
                label={isInputEmpty.label}
                variant="filled"
                value={inputText}
                onChange={e => onChangeHandler(e.target.value)}
                multiline={true}
                error={isInputEmpty.error}
                fullWidth={true}
            />
            <IconButton onClick={sendHandler} variant="contained" aria-label="send" size="large" sx={{
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