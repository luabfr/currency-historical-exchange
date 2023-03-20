import { useState,useEffect } from 'react';
import { requestOptions } from './useAPIKey';

const useGetSymbols = () => {

	const [symbols,setData] = useState({});
	useEffect(() => {

		async function fetchSymbols() {
			const response = await fetch("https://api.apilayer.com/exchangerates_data/symbols",requestOptions)
			const fetchedSymbols = await response.json();
			setData(fetchedSymbols.symbols)
		}
		
		fetchSymbols()
	},[]);
	// console.log("useGetSymbols: symbols",symbols);

	return symbols
}

export default useGetSymbols;