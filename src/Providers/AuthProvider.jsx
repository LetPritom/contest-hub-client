import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider ;

const AuthProvider = ({children}) => {

    
    const [user,setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    // register password and email

    const registerEmailAndPassFunc = (email , password) => {
        return createUserWithEmailAndPassword (auth , email ,password)
    };

    //  login with email and password

    const signInWithEmailAndPassFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password);
    }

    // updateProfile function

    const updateProfileFunction = (displayName , photoURL) => {
        setLoading(true)

        return updateProfile (auth.currentUser , {
            displayName,
            photoURL
        });
    };

    // sign in with google account 

    const signInWithGoogleFunc = () => {
        setLoading(true)
        return signInWithPopup(auth , googleProvider) ;
    }

    // logout function

    const logoutFunction = () => {
        setLoading(true)
           return signOut(auth);
    };


    // onAuthStateChange

    useEffect ( () => {
        const unsubscribe = onAuthStateChanged (auth , (currUser) => {
            setUser(currUser);
            setLoading(false);
        })
        return () => {
            unsubscribe ();
        } 
    } , []);
    const authInfo ={
        registerEmailAndPassFunc,
        signInWithEmailAndPassFunc,
        updateProfileFunction,
        signInWithGoogleFunc,
        logoutFunction,
        loading,
        setLoading,
        setUser,
        user,
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;