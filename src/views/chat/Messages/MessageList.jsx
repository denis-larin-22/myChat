import { Grid } from '@mui/material';
import { MessageItem } from './MassageItem';
import { MessageSettingBtn } from './MessageSettingBtn';

export const MessageList = ({ messagesList, deleteMessage }) => {
    return (
        <Grid container spacing={1} sx={{
            width: '100%',
        }}>
            {messagesList.map((item, index) => (
                <Grid item key={index} xs={12} sx={{
                    alignSelf: 'end',
                    position: 'relative'
                }}>
                    <MessageItem messageItem={item} />
                    <MessageSettingBtn deleteMessage={() => deleteMessage(item)} />
                </Grid>
            ))
            }
        </Grid >
    );
};