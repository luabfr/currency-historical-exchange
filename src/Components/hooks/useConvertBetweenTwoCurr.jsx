import { useState,useEffect } from 'react';
import { requestOptions } from './useAPIKey';

const useConvertBetweenTwoCurr = () =>{

	const [unitsConverted,setData] = useState({});
	useEffect(() => {

		async function fetchData() {
			const response = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=5",requestOptions)
			const fetchedConvertedUnits = await response.json(); 
			setData(fetchedConvertedUnits.result)
		}
		fetchData()
	},[]);
	// console.log("useConvertBetweenTwoCurr: unitsConverted",unitsConverted);

	return unitsConverted
}

export default useConvertBetweenTwoCurr;