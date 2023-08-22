import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
            <button className="btn btn-circle btn-outline" onClick={handleGoogleSignIn}>
                G
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;