import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {

    const{signIn} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = { email }
            //navigate(location?.state? location?.state: '/')

            //get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res =>{
                console.log(res.data)
                if(res.data.success){
                    navigate(location?.state? location?.state: '/')
                }
            })
        })
        .catch(error =>console.log(error));
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-36 w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        
                    <h1 className="text-4xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="login" />
                        </div>
                    </form>
                    <p className='mb-6 text-center'>New to Car Doctors <Link to= '/signup' className='font-bold text-orange-600'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;