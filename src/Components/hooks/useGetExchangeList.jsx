import { useState,useEffect } from 'react';
import useGetExhangeRateByDate from './useGetExhangeRateByDate';


const useGetExchangeList = ({date,currencyBase,currencySymbolsList}) => {
	/// Solo para test
	
	// =================

	const exchangeList = useGetExhangeRateByDate(date,currencyBase,currencySymbolsList)

	// const selectOptions = Object.entries(symbolsObj).map(([label,value]) => ({ label,value }));
	return exchangeList
}

export default useGetExchangeList;