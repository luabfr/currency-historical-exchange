import { useState,useEffect } from 'react';
import useGetSymbols from './useGetSymbols';


const useSymbolsToInputSelect = () => {
	const symbolsObj = useGetSymbols()

	const selectOptions = Object.entries(symbolsObj).map(([label,value]) => ({ label,value }));
	return selectOptions
}

export default useSymbolsToInputSelect;