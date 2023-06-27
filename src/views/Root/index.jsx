import { Container } from '@mui/material';

import { Header } from './components/Header';
import { Outlet } from 'react-router';

export const Root = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    );
};