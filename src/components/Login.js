import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData, checkValidDataSignUp } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    let message;
    if(isSignInForm){
       message = checkValidData(email.current.value,password.current.value);
    }else{
       message = checkValidDataSignUp(email.current.value,password.current.value, name?.current?.value);
    }
    setErrorMsg(message);

    if(!message){
      // Sign in/ Sign Up form
      if(!isSignInForm){
        // Sign Up Logic

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: ""
          }).then(() => {
            // Profile updated!
            // ...
            navigate('/browse');
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMsg(error.message);
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '-' +errorMessage);
        })

      }else{
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse');

          console.log(user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '-' +errorMessage);
        })

      }

    }
  }

  return (
    <div className='wrapper relative'>
      <Header />
      <div>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 bg-opacity-70'>
        <h1 className='text-white text-3xl font-bold mb-8'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <input ref={email} type='text' placeholder='Email' className='p-2 m-2 w-[100%] bg-gray-300 rounded-lg' /> 
        {
          !isSignInForm && (
            <input ref={name} type='text' placeholder='Name' className='p-2 m-2 w-[100%] bg-gray-300 rounded-lg' /> 
          )
        }
        <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-[100%] rounded-lg bg-gray-300' />
        <p className='p-2 text-red-700'>{errorMsg}</p>
        <button className='p-4 m-2 bg-red-600 w-[100%] text-white rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='p-4 m-4 text-white '>Are you new to netflix? <span className='text-red-700 cursor-pointer' onClick={() => toggleSignInForm()}>{isSignInForm ? 'Sign Up' : 'Sign In'}</span> Now</p>
      </form>
    </div>
  )
}

export default Login;