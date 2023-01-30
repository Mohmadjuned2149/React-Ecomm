import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebase/Config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from '../../components';
const Login = () => {
	const auth = getAuth(app);
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState({
		email:'',
		password:''
	});

	const handleChange = (e)=>{
      const name = e.target.name;
	  const value = e.target.value;

	  setUser(prevState=>({
		...prevState,
		[name]:value
	  }))
	}

	const handleSubmit = (e)=>{
   e.preventDefault();
   setIsLoading(true)
   signInWithEmailAndPassword(auth, user.email, user.password)
   .then((userCredential) => {
	 // Signed in 
	 setIsLoading(false)
	 const user = userCredential.user;
	 console.log(user)
	 toast.success('Logged in successfully')
	 navigate('/home');
   })
   .catch((error) => {
	 const errorCode = error.code;
	 const errorMessage = error.message;
	 console.log(errorMessage)
	 toast.error(error.message)
	 setIsLoading(false)
   });
	}
	console.log(isLoading)
  return (
	<>
	{isLoading && <Loader/>}
    <section className={isLoading?'ftco-section blur':'ftco-section'}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Login</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div className="text w-100">
								<h2>Welcome to login</h2>
								<p>Don't have an account?</p>
								<Link to="/" className="btn btn-white btn-outline-white lk">Sign Up</Link>
							</div>
			      </div>
						<div className="login-wrap p-4 p-lg-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-4">Sign In</h3>
			      		</div>
								<div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<Link to="/" className="social-icon d-flex align-items-center justify-content-center lk"><span className="fa fa-facebook"></span></Link>
										<a to="/" className="social-icon d-flex align-items-center justify-content-center lk"><span className="fa fa-twitter"></span></a>
									</p>
								</div>
			      	</div>
							<form  className="signin-form" onSubmit={handleSubmit}>
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input type="text" className="form-control" placeholder="email" onChange={handleChange} required name='email'/>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Password</label>
		              <input type="password" className="form-control" placeholder="Password" onChange={handleChange} required name='password'/>
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	<label className="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked/>
									  <span className="checkmark"></span>
										</label>
									</div>
									<div className="w-50 text-md-right">
										<Link to="/forgot">Forgot Password</Link>
									</div>
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

export default Login