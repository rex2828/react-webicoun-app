import React, { useState } from 'react'
import Modal from "../UI/Modal";
import classes from './Login.module.css';
const Login = (props) => {
    const [mobile, setMobile] = useState('');
    const [mobileIsValid, setMobileIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const submitBtnHandler = (event) => {
        event.preventDefault();
        if (!mobileIsValid) {
            setError(false);
            if (mobile === "1234567890") {
                setError(false);
                setMobileIsValid(true);
                setShowPassword(true);
            } else {
                setShowPassword(false);
                setMobileIsValid(false);
                setError(true);
            }
        } else {
            if (password === "12345678") {
                props.logInHandler(mobile, password);
            } else {
                setPasswordError(true);
            }
        }
    }
    return (
        <Modal>
            <form onSubmit={submitBtnHandler}>
                <h2 className={classes.heading}>Welcome to Webicoun</h2>
                <div className={classes.control}>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="text" id="mobile" placeholder="Mobile Number" value={mobile} onChange={event => setMobile(event.target.value)} disabled={mobileIsValid}></input>
                </div>
                {error && <p className={classes.errorpara}>Invalid mobile number</p>}
                {showPassword && <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}></input>
                </div>}
                {passwordError && <p className={classes.errorpara}>Invalid password</p>}
                <button className={classes.btn}>Continue</button>
            </form>
        </Modal>
    )
}
export default Login;