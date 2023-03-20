import React,{ useState  } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label,StyledDatePicker,StyledDatePickerSvgContainer,SvgCalendar } from '../CustomStyledComponents/CustomStyledComponents';


const MyDatePicker = ({ label }) => {
	const [startDate,setStartDate] = useState(new Date());
	return (
		<StyledDatePicker>
			<Label>{label}</Label>
			<DatePicker 
				selected={startDate} 
				maxDate={new Date()}
				onChange={(date) => setStartDate(date)} 
			/>
			<StyledDatePickerSvgContainer>
				<SvgCalendar />				
			</StyledDatePickerSvgContainer>
		</StyledDatePicker>
	);
};




export default MyDatePicker