import React, { useEffect, useState } from 'react';
import { Fire } from './Fire';


export const LoginReg = () => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInput = () => {
        setUser("");
        setEmail("");
    }

    const clearErrors = () => {
        emailError("");
        passwordError("");
    }

    const handleLogin = () => {
        clearErrors();
        Fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
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
        clearErrors();
        Fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
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
        Fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInput();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])


    return (
        <>

            <section className="login-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <p className="error">{emailError}</p>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <p className="error">{passwordError}</p>
                            </div>

                            <div className="form-group">
                                {hasAccount ? (
                                    <>

                                        <button className="btn btn-primary" onClick={handleLogin}>Sign In</button>
                                        <p>Dont'have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
                                        <p>have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
                                    </>
                                )}

                            </div>



                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}