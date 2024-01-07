import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';
import AuthForm from '../Form/AuthForm';

function Auth() {

    const [formData, setFormData] = useState({});
    const [signup, setSignup] = useState(true);

    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const handleAuthForm = () => {
        setSignup(!signup);
    }

    const sendProps = {
        signup,
        formData,
        inputHandler,
        handleAuthForm
    }

    return(
        <>
        <AuthForm sendProps={sendProps}/>
        </>
    )
}


export default Auth;