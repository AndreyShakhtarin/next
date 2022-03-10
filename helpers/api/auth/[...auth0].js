import { handleAuth, handleLogin, handleProfile } from '@auth0/nextjs-auth0';
import { myCustomLogger, myCustomErrorReporter } from '../utils';

export default handleAuth({
    async profile(req, res) {
        console.log('here');
        try {
            // Add your own custom logger
            myCustomLogger('Logging in');
            // Pass custom parameters to login
            await handleLogin(req, res, {
                authorizationParams: {
                    custom_param: 'custom'
                },
                returnTo: '/custom-page'
            });
        } catch (error) {
            // Add your own custom error handling
            myCustomErrorReporter(error);
            res.status(error.status || 400).end(error.message);
        }
    }
});
