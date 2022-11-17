import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleLogIn = data => {
        console.log(data)
    }
    return (
        <div className=' flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl'>Sign up</h2>
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
                <input className='btn btn-accent w-full' value='Sign up' type="submit" />

            </form>
            <p className='text-center'><small>Already member in doctors portal ? <Link to='/login' className='text-primary'>Log in</Link></small></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Signup;