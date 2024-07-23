import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.

    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black'>
      <img style={{height : '80px'}} src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
     { user && (
        <>
        <button className='p-2 m-2 text-white bg-red-600 rounded-lg absolute right-10 top-4' onClick={handleSignOut}>Sign Out</button>
        {user.displayName}
        </>
      )
     }
    </div>
  )
}

export default Header;