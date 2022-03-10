import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Profile = () => {
    // Fetch the user client-side
    const { user, error, isLoading } = useUser( );
    const router = useRouter();
    console.log(user, error, isLoading);
    // Server-render loading state
    if (!user || user.isLoggedIn === false) {
        // useEffect(() => {
        //     router.push("/login");
        // })
    }

    // Once the user request finishes, show the user
    return (
        <div>
            <h1>Your Profile</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default Profile