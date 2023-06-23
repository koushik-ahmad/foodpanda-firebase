import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    // 1. create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 2. Login with password 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 3. Google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // 3. Logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // // 4. Email verity
    // const emailVerify = (currentUser) => {
    //     setLoading(true)
    //     return sendEmailVerification(auth, currentUser)
    // }

    // 6. Forget password 
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current User state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();

    }, []);


    const authInfo = { user, loading, createUser, resetPassword, signIn, googleSignIn, logOut, }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;