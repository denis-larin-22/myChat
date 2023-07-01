import { Container } from '@mui/material';
import { MessageList } from '../Messages/MessageList';
import { ActiveRoomForm } from './ActiveRoomFrom';
import { connect } from 'react-redux';
import { deleteMessage, sendMessage } from '../../../store/messages-reducer.js/actions';

const ActiveRoomVeiw = ({ messagesList, sendMessage, deleteMessage }) => {
    return (
        <Container>
            <MessageList messagesList={messagesList} deleteMessage={deleteMessage} />
            <ActiveRoomForm sendHandler={sendMessage} />
        </Container>
    );
};

const mapState = (state) => ({
    messagesList: state.messages
});

const mapDispatch = (dispatch) => ({
    sendMessage: (value) => dispatch(sendMessage(value)),
    deleteMessage: (message) => dispatch(deleteMessage(message)),
});

export const ActiveRoom = connect(mapState, mapDispatch)(ActiveRoomVeiw); 