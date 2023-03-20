import { freeApiKey , freeApiURL } from "../../hooks/useAPIKey"

const sumar =()=>{
	return{
		type: "SUMAR",
		payload: 5
	}	
}

const restar =()=>{
	return{
		type: "RESTAR",
		payload: 5
	}	
}


//--------------------------------------------------------------

const START_GET_SYMBOLS_API = "START_GET_SYMBOLS_API"
const SUCCESS_GET_SYMBOLS_FROM_API = "SUCCESS_GET_SYMBOLS_FROM_API"
const ERROR_GET_API = "ERROR_GET_API"

const start_get_symbols_API = payload =>({
	type: START_GET_SYMBOLS_API,
	...payload
})

const success_get_symbols_from_API = payload => ({
	type: SUCCESS_GET_SYMBOLS_FROM_API,
	payload
})

const error_get_API = payload => ({
	type: ERROR_GET_API,
	payload
})

const  getSymbolsFromAPI = (payload) =>{
	return dispatch =>{
		dispatch( start_get_symbols_API() ) // Esto se ejecuta inmediatamente antes de llamar a la API
		console.log("freeApiKey",payload)
		fetch(`${freeApiURL}latest?${freeApiKey}&currencies=${payload.currenciesList}`)
			.then( response=>response.json() )
			.then( result => dispatch( success_get_symbols_from_API( result.data ) ) ) // Esto se ejecuta cuando fetch() se conecto correctamente a la API 
			.catch( error => dispatch( error_get_API( error ) ))
	
	}
}

//--------------------------------------------------------------

const START_GET_RATES_API = "START_GET_RATES_API"
const SUCCESS_GET_RATES_API = "SUCCESS_GET_RATES_API"
const ERROR_GET_RATES_API = "ERROR_GET_RATES_API"

const start_get_rates_API = payload => ({
	type: START_GET_RATES_API,
	...payload
})

const success_get_rates_API = payload => ({
	type: SUCCESS_GET_RATES_API,
	payload
})

const error_get_rates_API = payload => ({
	type: ERROR_GET_RATES_API,
	payload
})

const getRatesFromAPI = payload => {
	return dispatch => {
		dispatch(start_get_rates_API()) 

		fetch(`${freeApiURL}historical?${freeApiKey}&currencies=${payload.currenciesList}&base_currency=${payload.currencyBase}&date_from=${payload.dateFrom}T00%3A00%3A00.000Z&date_to=${payload.dateTo}T00%3A00%3A00.000Z`)
			.then(response => response.json())
			.then(result => dispatch( success_get_rates_API(result.data))) 
			.catch(error => dispatch( error_get_rates_API(error)))

	}
}

//--------------------------------------------------------------

const selected_option = payload => ({
	type: "SELECTED_OPTION",
	payload
})



export { sumar,restar,getSymbolsFromAPI,getRatesFromAPI,selected_option }