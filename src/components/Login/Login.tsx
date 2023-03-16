import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (): JSX.Element => {
    const [authing, setAuthing] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        setAuthing(true);

        try {
            const response = await signInWithPopup(auth, new GoogleAuthProvider());

            console.log(response);

            navigate('/');

        } catch (error) {
            console.log(error);
        }

        // .then(response => {
        //     console.log(response.user.uid);
        //     navigate("/");
        // })
        // .catch((error) => {
        //     console.log(error);
        //     setAuthing(false);
        // })
    }

    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign in</h1>

                    <div className="social-container">
                        <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="social" onClick={() => signInWithGoogle()} ><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#" className="social"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>New here!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

