import { List, ListItem } from '@mui/material';
import { MessageItem } from './MassageItem';

const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const MessageList = () => {
    return (
        <List>
            {messages.map((item, index) => (
                <ListItem key={index}>
                    <MessageItem messageText={item} />
                </ListItem>
            ))}
        </List>
    );
};