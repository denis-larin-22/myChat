import { createTheme} from '@mui/material';

import { LinkBehavior } from './override/LinkBehavior';

export default createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});