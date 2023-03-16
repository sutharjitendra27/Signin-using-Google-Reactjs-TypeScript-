import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";

const SignUp = (): JSX.Element => {

    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign Up</h1>

                    <div className="social-container">
                        <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#" className="social"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>

                    <input type="text" placeholder='Full Name' />
                    <input type="tel" maxLength={10} placeholder='Contact No.' />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Retype Password" />
                    {/* {!isValid ? <span>No blank Fields are Alllowed!</span>: ""} */}
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Already a Member!</h1>
                        <p>Click on Sign in button to move to the Sign In page</p>

                        <button className="ghost" id="signUp">Sign In</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
