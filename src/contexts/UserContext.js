import React, { createContext } from 'react';

const AuthContext = createContext();

const UserContext = ({children}) => {
    const user = {displayName: 'Abdullah Al Mahmud'}
    const authInfo = {user: user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;