import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvides = ({children}) => {


     const authInfo = {
        
     }

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvides;