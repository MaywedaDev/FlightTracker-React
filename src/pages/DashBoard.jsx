import { useState, useEffect } from 'react'
import '../styles/dashboard.css'
function DashBoard(){

	const [flights, setFlights] = useState(null)

	const [displayTime, setDisplayTime] = useState(null)

	const time = new Date().getTime()

	const endDate = Math.round((time / 1000))

	function setTime(){
		if(timeRange < 1){
			setDisplayTime({value: Math.round((timeRange * 60)), type: 'minutes'})
		}
		if(timeRange >= 1 && timeRange < 24){
			setDisplayTime({value: timeRange, type: 'hour(s)'})
		}
		if(timeRange >= 24){
			setDisplayTime({value: Math.round(timeRange / 24), type: 'day(s)'})
		}
	}

	const [timeRange, setTimeRange] = useState(1)

	function formatDate(dateString){
		return new Date(dateString).toLocaleTimeString(undefined, {hour: '2-digit', hour12: true, minute:'2-digit'})
	}

	useEffect(() => {
		setTime()
		let startdate = endDate - (timeRange * 60 * 60)
		// console.log(startdate, endDate)
		fetch(`https://opensky-network.org/api/flights/all?begin=${startdate}&end=${endDate}`)
		.then((res) => res.json()).then((data) => {
			// console.log(data)
			setFlights([...data])
		})
	}, [timeRange])
	return (<div className='flex-column d-flex '>
			<div className="py-3 px-5">
				<h2 className="text-dark">FlightTracker</h2>
			</div>
			<div className={`ctrls px-5 py-2 text-light mb-4`} >
				{displayTime && <h1 className='mb-4'>Flights in the past {displayTime.value} {displayTime.type}</h1>}
				<div className='d-flex'>
				<select value={timeRange} onChange={(e) => {setTimeRange(e.target.value)}} name="" id="" className={`select form-control mx-auto`}>
					<option value="0.16">10 minutes</option>
					<option value="0.5">30 minutes</option>
					<option value="1">1 hour</option>
					<option value="2">2 hours</option>
				</select>
				</div>
			</div>
			<div className='mx-auto px-2 px-md-4 border rounded-3 rounded table-cont'>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">Airport</th>
							<th scope="col">Time</th>
							<th scope="col">Arriving</th>
							<th scope="col">Departing</th>
						</tr>
					</thead>
					<tbody>
						{flights && <>
						{flights.map(flight => <tr key={flight.callsign
}>
						<th scope="row">{flight.estArrivalAirport}</th>
						<td>{formatDate(flight.firstSeen) + ' WAT'}</td>
						<td>{flight.estArrivalAirportHorizDistance}</td>
						<td>{flight.estDepartureAirportHorizDistance}</td>
						</tr>) }
						</>}
						{/* <tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						</tr> */}

					</tbody>
				</table>

				{flights && flights.length < 1 && <p className='text-danger text-center'>There are no flights in this time range</p>}
			</div>
			<div className='position-absolute bottom-0 text-center w-100 text-secondary fs-6'>Made by MaywedaDev</div>
		</div>)
}

export default DashBoard