import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({displayName: 'Abdullah Al Mahmud'});
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignin = ()=>{
        return signInWithPopup(auth, provider);
    }
    const authInfo = {user, createUser, signIn, googleSignin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;