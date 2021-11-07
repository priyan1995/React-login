import React, { useState } from 'react';
import { Fire } from './Fire';


export const LoginReg = () => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
 
    const handleLogin = () => {
        Fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err) => {
            switch (err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleSignup = () => {
        Fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err) => {
            switch (err.code){
                case "auth/email-already-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleLogout = () => {
        Fire.auth().signOut();
    } 

    const authListener = () => {
        
    }



    return (
        <>

        </>
    )
}