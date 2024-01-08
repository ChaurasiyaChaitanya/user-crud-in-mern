import { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';
import AuthForm from '../Form/AuthForm';

function Auth() {

    const [formData, setFormData] = useState({});
    const [signup, setSignup] = useState(true);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const AuthSignupHandler = async (e) => {
        e.preventDefault();
 
        if (!formData.username || !formData.email || !formData.password || !formData.cpassword) {
            setError("Please Enter a value. At least one input is empty!")
            return;
        }
 
        if (formData.username && formData.username.length < 4) {
            setError("Username length must be atleast 4 characters!")
            return;
        }
        if (formData.password && formData.password.length < 6) {
            setError("password length must be atleast 6 characters!")
            return;
        }

        if (formData.cpassword && (formData.password !== formData.cpassword)) {
            setError("Password does not match with entered one!")
            return;
        }
 
        const userData = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        }
 
        try {
            const res = await axios.post("http://localhost:5000/users", userData);
            console.log(res);
            setMsg("User registered successfully..");
        } catch (error) {
            setError(error.message);
        }
        setFormData({
            username: "",
            email: "",
            password: "",
            cpassword: ""
        });
    }

    const AuthLoginHandler = async (e) => {
        e.preventDefault();
    }

    const handleAuthForm = () => {
        setSignup(!signup);
    }

    const sendProps = {
        signup,
        formData,
        inputHandler,
        handleAuthForm,
        AuthSignupHandler,
        AuthLoginHandler
    }

    return(
        <>
        {msg && <h4 className='mt-4'>{msg}</h4>}
        {error && <h4 className='error mt-4'>{error}</h4>}
        <AuthForm sendProps={sendProps}/>
        </>
    )
}


export default Auth;