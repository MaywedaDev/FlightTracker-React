
function Login(){

	return (<>
		<div className="text-dark p-8">
			<h1 className="mb-4">Welcome back</h1>
			<p>Welcome back, please enter your details</p>

			<div className="input-group mb-4 flex flex-column align-items-center">
				<label>Email</label>
				<input className="form-control w-50" placeholder="Your Email"/>
			</div>

			<div className="input-group mb-4 flex flex-column align-items-center">
				<label>Password</label>
				<input className="form-control w-50" placeholder="Password"/>
			</div>
		</div>
	</>)

}

export default Login