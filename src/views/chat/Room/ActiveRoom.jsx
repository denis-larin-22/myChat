import { Container } from '@mui/material';
import { MessageList } from '../Messages/MessageList';
import { ActiveRoomForm } from './ActiveRoomFrom';

export const ActiveRoom = () => {
    return (
        <Container>
            <MessageList />
            <ActiveRoomForm />
        </Container>
    );
};