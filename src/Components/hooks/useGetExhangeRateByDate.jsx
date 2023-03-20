import { useState,useEffect } from 'react';
import { requestOptions } from './useAPIKey';

const useGetExhangeRateByDate = (date,currencyBase,currencySymbolsList) => {

	date = "2020-05-16"
	// currencySymbolsList ="GBP%2C%20JPY%2C%20USD"
	// currencySymbolsList = "GPB,JPY,EUR"
	// currencyBase="USD"

	const [ratesByDate,setRatesByDate] = useState({});
	useEffect(() => {

		async function fetchSymbols() {
			// el formate de envio de DATE es: "2020-05-16"
			// el formate de envio de currencyBase es: "USD"
			// el formate de envio de currencySymbolsList es:"GBP%2C%20JPY%2C%20USD" / "GPB, JPY, EUR"
			const apiUrl = `https://api.apilayer.com/exchangerates_data/${date}?symbols=${currencySymbolsList}&base=${currencyBase}`
			const response = await fetch( apiUrl , requestOptions )
			const ratesByDate = await response.json();
			setRatesByDate(ratesByDate)

			console.log("ratesByDate x", ratesByDate)
		}

		fetchSymbols()
	},[]);

	return ratesByDate
}

export default useGetExhangeRateByDate;