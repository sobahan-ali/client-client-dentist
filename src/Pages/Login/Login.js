import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logInError, setLogInError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const handleLogIn = (data, e) => {
    
        const form = e.target;
        setLogInError('')
        console.log(data)
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
            form.reset();
        })
        .catch(error => {
            console.error(error.message)
            setLogInError(error.message)
        })

    }
    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Log in</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='text'
                            {...register("email",{ 
                                required: 'email address is required',
                               
                            })}
                            placeholder="email" className='input input-bordered w-full' />
                         {errors.email && <p className='text-red-600 text-center' role="alert">{errors.email?.message}</p>}
                    </div>
                   
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' 
                        {...register("password", { 
                            required: 'password is required',
                            minLength: {value: 6, message: 'password must be six characters'}
                        
                        })} placeholder="password" className='input input-bordered w-full' />
                        {errors.password && <p className='text-red-600 text-center' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">forgot Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value='Log in' type="submit" />
                        {logInError && <p className='text-red-600 text-center'>{logInError}</p>}
                </form>
                <p className='text-center'><small>new to doctor portal? <Link to='/signup' className='text-primary'>create new account</Link></small></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;