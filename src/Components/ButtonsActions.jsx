import React from 'react'
import { connect } from 'react-redux';
import { sumar,restar,getSymbolsFromAPI,getRatesFromAPI } from './store/test/actions';
import { Button } from './CustomStyledComponents/CustomStyledComponents';
import InputSelect from './InputSelect/InputSelect';
import MyDatePicker from './MyDatePicker/MyDatePicker';

const mapStateToProps = ( state ) => {
	return {
		currenciesRatesByBaseAndDate: state.testReducer.currenciesRatesByBaseAndDate
	}
}


const ButtonsActions = ({ sumar,restar,getSymbolsFromAPI,getRatesFromAPI,value,currenciesRatesByBaseAndDate })=>{
	const symbolsList = { currenciesList: "EUR,CAD,USD"}
	const dateAndRate = {
		currencyBase: "JPY",
		currenciesList: "EUR,CAD,USD",
		dateFrom: "2021-12-01", 
		dateTo: "2021-12-01", 
	}



	return (
		<>
			<InputSelect label={"Moneda de Referencia"}/>
			{/* <MyDatePicker label={"Fecha de conversión"}/> */}
			{/* <h1>value: {value}</h1>
			<button onClick={()=>sumar()}>
				sumar
			</button>
			<button onClick={()=>restar()}>
				restar
			</button> */}

			<div>
				<Button  onClick={() => getSymbolsFromAPI(symbolsList)} secondary>
					get Symbols From API
				</Button >
				<Button onClick={() => getRatesFromAPI(dateAndRate)} secondary>
					get Rates by Base and Date From API
				</Button >
			</div>
			
		</>
	)
}

//connect( { rescata data del store },{ envia data al store } )
export default connect(mapStateToProps,{ sumar,restar,getSymbolsFromAPI,getRatesFromAPI })(ButtonsActions)