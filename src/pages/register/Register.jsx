import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../login/Login.css'
import app from '../../firebase/Config';
import { toast,ToastContainer } from 'react-toastify';
const Register = () => {
	const auth = getAuth(app);
	const navigate = useNavigate();
	const [user, setUser] =useState({
		email: '',
		password: ''
	});
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user.email)
		createUserWithEmailAndPassword (auth, user.email, user.password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user)
				toast.success('User Registered successfully')
				navigate('/');
				
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				
				toast.error(errorMessage)
			});
	}
	return (
		<>
		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section">Register</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-12 col-lg-10">
						<div className="wrap d-md-flex">
							<div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
								<div className="text w-100">
									<h2>Welcome to Registeration</h2>
									<p>Already have an account?</p>
									<Link to="/" className="btn btn-white btn-outline-white lk">Sign in</Link>
								</div>
							</div>
							<div className="login-wrap p-4 p-lg-5">
								<div className="d-flex">
									<div className="w-100">
										<h3 className="mb-4">Sign Up</h3>
									</div>
								</div>
								<form className="signin-form" onSubmit={handleSubmit}>
									<div className="form-group mb-3">
										<label className="label" for="name">Email</label>
										<input type="text" className="form-control" placeholder="Email" required onChange={handleChange} name='email'/>
									</div>
									<div className="form-group mb-3">
										<label className="label" for="password">Password</label>
										<input type="password" className="form-control" placeholder="Password" required onChange={handleChange} name='password'/>
									</div>
									<div className="form-group">
										<button type="submit" className="form-control btn btn-primary submit px-3">Sign Up</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Register