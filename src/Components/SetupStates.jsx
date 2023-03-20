// import React from 'react'
import { connect } from 'react-redux';
import { getSymbolsFromAPI } from './store/test/actions';


const SetupStates = ({ getSymbolsFromAPI }) => {
	const symbolsList = { currenciesList: "" } // Si la peticion se envia vacia, devuelve la totalidad de monedas.
	getSymbolsFromAPI(symbolsList)

	console.log("Setup States: ok")
	return null
}

export default connect(null,{ getSymbolsFromAPI })(SetupStates)