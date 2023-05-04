import { useState } from 'react'
import styles from '../styles/Login.module.css'
function Login(){

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (<div className="w-100 flex-grow-1 d-flex">
		<div className='w-50 flex-grow-1 d-flex flex-column' >
			<div className="py-3 px-5">
				<h2 className="text-dark">FlightTracker</h2>
			</div>
			<div className="d-flex flex-grow-1">
				<div className={`${styles['login-card'] } w-100 text-dark px-5 mx-0 d-flex flex-column justify-content-center`}>
					<div className={styles.card + " mx-auto"}>
						<h3 className="">Welcome back</h3>
						<p className="text-green mb-4">Welcome back! Please enter your details</p>

						<div className="mb-4 flex flex-column align-items-center">
							<label><h6>Email</h6></label>
							<input className="form-control" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
						</div>

						<div className="mb-4 flex flex-column align-items-center">
							<label><h6>Password</h6></label>
							<input className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
						</div>

						<button onClick={() => console.log(email, password)} className="btn w-100 text-light">Sign in</button>
					</div>
				</div>
			</div>
		</div>
		<div className="w-50 vh-100 d-none d-md-block">
			<img src="plane.jpg" className='w-100 h-100 object-fit-cover' alt="" />
		</div>
		
	</div>)

}

export default Login