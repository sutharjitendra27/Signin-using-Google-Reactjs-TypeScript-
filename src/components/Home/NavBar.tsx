import React from 'react'
import './NavBar.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function NavBar() {

  const auth = getAuth();
  const navigate = useNavigate();

  const signOutHandler = () => {
      signOut(auth);
      navigate('/login');
  };

  return (
    <div className="navbar">
    <h2>JS</h2>
    <button onClick={signOutHandler} id='logout_btn'>Logout</button>
  </div>
  )
}

export default NavBar