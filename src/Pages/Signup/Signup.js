import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [signUpError, setSignUpError] = useState('')
    const {createUser, updateUser} = useContext(AuthContext)

    const handleLogIn = (data, e) => {
        const form = e.target;
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            toast('sign up successfully')
            form.reset();
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then( () => {})
            .catch(error => console.error(error))
        })
        .catch(error => setSignUpError(error.message))
        
    }
    return (
        <div className=' flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl'>Sign up</h2>
            <form onSubmit={handleSubmit(handleLogIn)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type='text'
                    {...register("name",{ 
                        
                    })}
                        placeholder="name" className='input input-bordered w-full' />
                     {errors.email && <p className='text-red-600 text-center' role="alert">{errors.email?.message}</p>}
                </div>

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
                        minLength: {value: 6, message: 'password must be six characters'},
                        // pattern: {value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/, message: 'strong password'}
                    
                    })} placeholder="password" className='input input-bordered w-full' />
                    {errors.password && <p className='text-red-600 text-center' role="alert">{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">forgot Password</span>
                    </label>
                </div>
                <input className='btn btn-accent w-full' value='Sign up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p className='text-center'><small>Already member in doctors portal ? <Link to='/login' className='text-primary'>Log in</Link></small></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Signup;