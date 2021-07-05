import React , { useState }  from 'react'
//import logo from './logo.svg';
import './css/main.css';
import MySelect from "./Components/MySelect/MySelect"
import MyDatePicker from "./Components/MyDatePicker/MyDatePicker"
import MyList from "./Components/MyList/MyList"


const selectOptions = [
	{ value: 'chocolate',label: 'Chocolate' },
  { value: 'lucho',label: 'Lucho' },
	{ value: 'strawberry',label: 'Strawberry' },
	{ value: 'vanilla',label: 'Vanilla' }
]

const miFuncionParaManejarElEvento =""

const myJson = [{
    value: "CAD",
    label: "CAD",
		countryName: "CAD",
		currency: "1.260046",
		flag: "ca.png",
	},{
    value: "GBP",    
    label: "GBP",
		countryName: "GBP",
		currency: "1.260046",
		flag: "dk.png",
	},{
    value: "USD",
    label: "USD",
		countryName: "USD",
		currency: "1.260046",
		flag: "us.png",
	},{
    value: "EUR",
    label: "EUR",
		countryName: "EUR",
		currency: "1.260046",
		flag: "eu.png",
    
	}
]


function App() {

  
  const [count, setCount] = useState(0);
  console.log("count", count)

  return (
    <main className="App">
      <section className="container">

        <h1>Histórico de cotizaciones {/*count*/}</h1>

        {/* 1 - Select: Moneda */}      
        <MySelect selectOptions={ myJson } test={"defaut-input"} label="Selecciona la moneda de referencia"/>

        {/* 2 - Select: Datepicker */}
        <MyDatePicker label="Ingresa la fecha de cotización"/>

        {/* 3 - Boton: Buscar cotizacion (btn primario) */}
        <button className="btn" onClick={ 
          () => setCount( myJson.push({
            value: "WEA",
            label: "WEA",
            countryName: "WEA",
            currency: "1.260046",
            flag: "wea.jpg",}) )
          }>
          Buscar cotizaciones
        </button>
        {/* 4 - Lista de resultados */}
        <MyList myJson={myJson}/>
        {/* 5 - Boton: Ver mas cotizaciones (btn secundario) */}
        <button className="btn btn-secondary" onClick={miFuncionParaManejarElEvento}>
          Ver más cotizaciones
        </button>
      </section>
      
    </main>
  );
}

export default App;
