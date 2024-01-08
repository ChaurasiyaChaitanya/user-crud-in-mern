import { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';
import AuthForm from '../Form/AuthForm';
import Card from "../Card/Card";

function Auth() {

    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({});
    const [signup, setSignup] = useState(true);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const getUserHandler = async () => {
        try {
            const res = await axios.get("http://localhost:5000/users");
            console.log(res);
            setData(res.data);
        } catch (error) {
            setError(error.message);
        }
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
 
        setMsg("");
        setError("");

        if (!formData.username || !formData.password) {
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

        try {
            const res = await axios.get("http://localhost:5000/users?username="+formData.username+"&password="+formData.password);
            console.log(res);
          
            if(res.data) {
                setData(res.data)
                setIsLogin(!isLogin); 
 
                setFormData({
                    username: "",
                    password: ""
                });

                getUserHandler();
            } else {
                setError("Invalid Credentials. Username or Password is wrong.");
            }
 
        } catch (error) {
            setError(error.message);
        }
    }

    const handleAuthForm = () => {
 
        setSignup(!signup);
        setIsLogin(false);
        setMsg("");
        setError("");
        setFormData({
            username: "",
            email: "",
            password: "",
            cpassword: ""
        });
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
        {!isLogin && <AuthForm sendProps={sendProps}/> }
 
            {!error && isLogin && 
            <div>
                <h2 className='mt-4'>Users Data</h2><button type="submit" className='btn btn-dark' onClick={handleAuthForm}>Logout</button>
                <div className='container h-50'>
                    {data ? <Card data={data} /> : "No Data Found!"}
                </div>
            </div>
            }
        </>
    )
}


export default Auth;