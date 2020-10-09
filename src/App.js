import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Chat from './Chat/Chat';
import { selectUser } from './features/userSlice';
import Login from './login/Login';
import { auth } from './server/firebase';
import { login, logout } from './features/userSlice';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoUrl,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
