import React,{ useState  } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MyDatePicker = ({ label }) => {
	const [startDate,setStartDate] = useState(new Date());
	return (
		<div>
			<label>{label}</label>
			<DatePicker 
				selected={startDate} 
				maxDate={new Date()}
				onChange={(date) => setStartDate(date)} 
			/>
		</div>
	);
};




export default MyDatePicker