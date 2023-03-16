import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRoute = (props: any) => {
    const [loading, setLoading] = useState(false);

    const {children} = props;
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth])

    const AuthCheck = onAuthStateChanged(auth, (user)=>{
        if(user){
            setLoading(false);
        }else{
            console.log("Unauthorized");
            navigate('/login');
        }
    });

    if(loading) return <p>Loading...</p>

    return(
        <>{children}</>       
    );

};

export default AuthRoute;