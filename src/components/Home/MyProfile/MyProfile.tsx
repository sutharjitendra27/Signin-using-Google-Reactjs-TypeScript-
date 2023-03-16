import { Fragment, useState } from 'react'
import './MyProfile.css';
import img from './manager.png';

function MyProfile() {

    const [userID, setUserID] = useState("");
    const [userFullName, setUserFullName] = useState("");
    const [userContact, setUserContact] = useState("");
    const [userEmail, setUserEmail] = useState("");

    return (
        <Fragment>
            <div className="profile" >
                <form className="form-data" >
                    <div className="col">
                        <img src={img}></img>
                        <h4>Welcome, User!</h4>
                        <div className="row">
                            <input id="id" placeholder="Id" />
                            <input id="fname" onChange={(e) => setUserFullName(e.target.value)} placeholder="Full name" />
                            <input id="contact" onChange={(e) => setUserContact(e.target.value)} placeholder="Contact No." />
                            <input id="email" onChange={(e) => setUserEmail(e.target.value)} placeholder="Email" />
                            <div className="row">
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default MyProfile