import React,{ useEffect , useState }from 'react'
import { UlCurrency,LiCurrecy,StationFlag,StationName,StationAmount } from '../CustomStyledComponents/CustomStyledComponents';
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getRatesFromAPI } from '../store/test/actions';

const CurrencyList = ({ myJson }) => {
	const [,setList] = useState({})


	const dateFrom = useSelector(state => { return state.testReducer.dateFrom });
	const dataCurrency = useSelector(state => { return state.testReducer.currenciesRatesByBaseAndDate });
	console.log("dataCurrency[dateFrom]",dataCurrency[dateFrom])

	const dataCurrencyOK = dataCurrency[dateFrom]
	for (const property in dataCurrencyOK) {
		console.log(`${property}: ${dataCurrencyOK[property]}`);
	}


	
	let conversion = dataCurrencyOK
	if (conversion == undefined){
		conversion ={}
	}
	const keys = Object.keys(conversion);

	const items = keys.map((key) => (
		<LiCurrecy key={key}>
			{/* {key}: {conversion[key]} */}
			<StationFlag>
				<img srcSet={"https://flagcdn.com/w40/za.png"} alt={key} /> 
			</StationFlag>
			<StationName>{key}</StationName>
			<StationAmount>{conversion[key]}</StationAmount>
		</LiCurrecy >
	));

	return (
	<UlCurrency >		
			{items}
	</UlCurrency>
)};


export default connect(null,{ getRatesFromAPI })(CurrencyList)