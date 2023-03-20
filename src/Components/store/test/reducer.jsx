const initialState = {
	value: 0,
	currenciesList: {},
	currenciesRatesByBaseAndDate: {},
	optionSelected: "",
	dateFrom: "2021-12-01",
	dateTo: "2021-12-01"

}



export default (state = initialState,actions) => {
	switch (actions.type) {
		case "SUMAR":
			return {
				...state,
				value: state.value + 1
			}
		case "RESTAR":
			return {
				...state,
				value: state.value - 3
			}

		case "SUCCESS_GET_SYMBOLS_FROM_API":
			return {
				...state,
				currenciesList: actions.payload
			}

		case "ERROR_GET_API":
			return {
				...state,
				currenciesList: actions.payload
			}

		case "SUCCESS_GET_RATES_API":
			return {
				...state,
				currenciesRatesByBaseAndDate: actions.payload
			}
		case "SELECTED_OPTION":
			return {
				...state,
				optionSelected: actions.payload
			}

		default:
			return state
		
	}


}





export const selectCurrentValue =(state)=>{
	return state.testReducer.value
}