import { Link } from 'react-router-dom';
 
function AuthForm(props) {
 
    const { signup, formData, inputHandler, handleAuthForm } = props.sendProps;
 
    return (
        <>
            <div className='container d-flex align-item-center justify-content-center w-100'>
                <div className='form'>
                    <h2 className='mb-3 text-center'>{signup ? "Signup" : "Login"}</h2>
                    <form>
                        <div className='form-group mb-2'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <input type='text' name='username' className='form-control' placeholder='Enter username' value={formData.username} onChange={inputHandler} />
                        </div>
                        {signup && <div className='form-group mb-2'>
                            <label htmlFor='email' className='form-label'>Email Address</label>
                            <input type='email' name='email' className='form-control' placeholder='Enter email' value={formData.email} onChange={inputHandler} />
                        </div>}
                        <div className='form-group mb-2'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input type='password' name='password' className='form-control' placeholder='Enter password' value={formData.password} onChange={inputHandler} />
                        </div>
                        {signup && <div className='form-group mb-2'>
                            <label htmlFor='cpassword' className='form-label'>Confirm Password</label>
                            <input type='text' name='cpassword' className='form-control' placeholder='Enter confirm password' value={formData.cpassword} onChange={inputHandler} />
                        </div>}
                        <button type='submit' className={`btn w-100 mt-2 ${signup ? 'btn-primary' : 'btn-success'}`} >{signup ? "Sign up" : "Login"}</button>
                        <p className='mt-3'>{signup ? "Already Registerd? " : "Don't have an Account? "}<Link to={'/'} onClick={handleAuthForm} className='text-decoration-none'>{signup ? "Login" : "Signup"}</Link></p>
                    </form>
                </div>
            </div>
        </>
 
    );
};
 
export default AuthForm;