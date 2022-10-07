import "./css/Login.css"
import loginImg from "../login-logo.png"
import logo from "../logo.png"
import googleLogo from "../google.png"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, provider } from "../firebase/app"
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../redux/reducers/counterSlice"
import { useEffect, useState } from "react"
import axios from '../utils/axios'

function Login() {
  const dispatch = useDispatch()

    async function signIn() {

      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          dispatch(login(user))
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          const credential = GoogleAuthProvider.credentialFromError(error);
          if (error) console.log(errorCode, errorMessage, credential)
        });
      axios.get('/authData')
    }

    return (
      <div className='login'>
        <div className='login__left'>
          <img src={loginImg} alt="" />
        </div>
        <div className='login__right'>
          <div className='login__rightTop'>
            <img src={logo} alt="" />
            <img src={googleLogo} alt="" />
          </div>
          {/* Sign in with google button */}
          Login with your Google Account
          <div className='google__button' onClick={signIn}>
            <img src={googleLogo} alt="" />
            <h2>Sign in with Google</h2>
          </div>
        </div>
      </div>
    )
  }

export default Login