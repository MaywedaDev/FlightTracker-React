import styles from '../styles/DashBoard.module.css'
function DashBoard(){

	return (<>
			<div className="py-3 px-5">
				<h2 className="text-dark">FlightTracker</h2>
			</div>
			<div className={`${styles.ctrls} px-5 py-2 text-light mb-4`} >
				<h1 className='mb-4'>Flights in the past 1 hour(s)</h1>
				<div className='d-flex'>
				<select name="" id="" className={`${styles.select} form-control mx-auto`}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				</div>
			</div>
			<div className='m-4 px-4 border rounded-3 rounded'>
			</div>
		</>)
}

export default DashBoard