import React from 'react'
import { Label , StyledSelect } from '../CustomStyledComponents/CustomStyledComponents'
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getRatesFromAPI } from '../store/test/actions';

// El select debe recibir la OPTIONS con el siguiente formato:
// const myOptions = [
// 	{ value: '1',label: 'Option 1' },
// 	{ value: '2',label: 'Option 2' },
// 	{ value: '3',label: 'Option 3' },
// ]

const InputSelect = ({ selectOptions,label, getRatesFromAPI }) => {
	const dispatch = useDispatch();

	const dateFrom = useSelector(state => {	return state.testReducer.dateFrom	});
	const dateTo = useSelector(state => {	return state.testReducer.dateTo	});
	const optionSelected = useSelector(state => { return state.testReducer.optionSelected });

	// 1 - me subscribo a state que contiene la lista de Monedas para obtener sus datos, y luego lo transformo en un array ["USD","CAD", "etc"] 
	const options = useSelector(state => {
		return Object.keys(state.testReducer.currenciesList)
	});
	// 2 - transformo el array a un nuevo array de objetos
	const optionsInArray = Object.keys(options).map(clave => ({ label: options[clave],value: options[clave] })); 



	const updateRequest =()=>{
		const dateAndRate = {
			currencyBase: `${optionSelected}`,
			currenciesList: `${options}`, // esto no esta bien
			dateFrom: `${dateFrom}`,
			dateTo: `${dateTo}`,
		}
		getRatesFromAPI(dateAndRate)		
	}

	const handleSelectChange = (selectedOption) => {
		dispatch({
			type: "SELECTED_OPTION",
			payload: selectedOption.value
		});
		
		updateRequest()
		
	};




	return (
		<div>
			<Label>{label}</Label>
			<StyledSelect
				options={optionsInArray}				
				onChange={handleSelectChange}
				// value={}
			/>
		</div>
		)
}


export default connect(null,{ getRatesFromAPI })(InputSelect)