import { Link } from '@mui/material';
import { useParams } from 'react-router';

export const ChatRoom = () => {
    const { roomId } = useParams();

    return (
        <div className="">
            <Link href="..">Back</Link>
            RoomID: {roomId}
        </div>
    );
};