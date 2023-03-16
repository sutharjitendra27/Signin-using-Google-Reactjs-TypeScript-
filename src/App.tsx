import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

import { initializeApp } from 'firebase/app';
import { Config } from './components/Config/FirebaseConfig';
import AuthRoute from './components/AuthRoute';

initializeApp(Config.firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthRoute><Home /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
