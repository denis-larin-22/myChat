import { Box } from '@mui/material';
import { RoomItem } from './RoomItem';

export const RoomList = () => {
    const roomList = [1, 2, 3, 4];

    return (
        <Box sx={{
            width: 'fit-content',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
            {roomList.map((item, index) => {
                return <RoomItem key={index} />;
            })}
        </Box>
    );
};