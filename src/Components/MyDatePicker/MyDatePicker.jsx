import React,{ useState  } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MyDatePicker = ({ label }) => {
	const [startDate,setStartDate] = useState(new Date());
	return (
		<div className="MyDatePicker">
			<label>{label}</label>
			<DatePicker 
				selected={startDate} 
				maxDate={new Date()}
				onChange={(date) => setStartDate(date)} 
			/>
			<span className="svg-container">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9v10a2 2 0 002 2h12a2 2 0 002-2V9M4 9V7a2 2 0 012-2h2M4 9h16m0 0V7a2 2 0 00-2-2h-2m0 0V3m0 2H8m0-2v2" /> </svg>
			</span>
		</div>
	);
};




export default MyDatePicker