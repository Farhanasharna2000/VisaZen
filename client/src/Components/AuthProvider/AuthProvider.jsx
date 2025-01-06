/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';
import { auth } from "../../Firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleLogout = () => {
        return signOut(auth)
    }

    const handlePasswordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        handlePasswordReset,
        user,
        setUser,
        manageProfile,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
            setLoading(false)
            return () => {
                unsubscribe()
            }
        })
    }, [])

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;