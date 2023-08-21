import React, { useContext } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        const from = location?.state?.from?.pathname || '/';

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            fetch('http://localhost:3000/jwt',{
                method:"POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('car-doctor-access', data.token);
                navigate(from, {replace: true});
            })
        })
        .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img1} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center my-4">Please Login!!!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control mb-7">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-7">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="btn btn-primary" />
                            </div>
                        </form>
                        <div>
                            <p className='text-center'>New to Cars Doctor? Please 
                            <Link to="/register" className='text-error'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;