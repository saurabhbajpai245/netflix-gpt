import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constant';

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
    <div className='absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black'>
      <img style={{height : '80px'}} src={LOGO_URL} />
     { user && (
        <>
        <button className='p-2 m-2 text-white bg-red-600 rounded-lg absolute right-10 top-4' onClick={handleSignOut}>Sign Out</button>
        <div className='p-2 m-2 absolute right-40 top-4'>{user.displayName}</div> 
        </>
      )
     }
    </div>
  )
}

export default Header;