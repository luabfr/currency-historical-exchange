import React from 'react';
import styled , {css} from 'styled-components';
import Select from 'react-select'

// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

const primaryFont = '"Roboto",	sans-serif'
// Colores:
const primaryColor = "#fd7141"
const primaryColorLight = "#fd9363"
const greyLight = "#ddd"
const greyLighter = "#f0f9fc"
const shadow0 = "0 0 1rem 1rem #2221"
const shadow1 = "0.1rem 0.1rem .5rem 0 #3363"

export const StyledApp = styled.main`
  text-align: left;
	background: #f0f9fc;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	min-height: 100vh;
	padding: 1.5rem;
	padding-top: 5rem;	
`;

export const Container = styled.section`
	background: white;
	border-radius: .5rem;
	box-shadow:  ${shadow0};
	padding: 1.5rem;
	padding-top: 5rem;

  @media (min-width: 768px) {
    & {
      padding: 5rem 5rem 3rem;
    }
  }

`;

export const Button = styled.button`
	width: 100%;
	height: 3rem;

	display: flex;
	justify-content: center;
	line-height: 1rem;
	align-items: center;
	border-radius: 1.5rem;
	border: none !important;
	background: ${primaryColor};
	color: white;
	font-family: ${primaryFont};
	font-size: 1rem;
	margin-top: 3rem;
	box-shadow: ${shadow1};
	transition: all .1s;

	&:hover{
		cursor: pointer;
		background: ${primaryColorLight};
		// border: 1px solid ${primaryColor} !important;
	}

	${(props) =>
		props.secondary && css`
			background: white !important;
			color: ${primaryColor};
			border: 1px solid ${primaryColor} !important;
	`}

`

export const StyledSelect = styled( Select )`
	box-shadow: ${shadow1};
	border-radius: .5rem;
	height: 3rem;
	
`

export const Label = styled.label`
	display: block;
	text-align: left;
	margin-top: 2rem;
	margin-bottom: .8rem;
	font-size: 1.1rem;
`


export const H1 = styled.h1`
	font-size: 2.1rem;
	font-weight: normal;
	margin-top: 0;
`

export const UlCurrency = styled.ul`
	margin-top: 3rem;
	padding: 0;
`

export const LiCurrecy = styled.li`
	list-style: none;

	display: flex;	
	height: 3rem;
	overflow: hidden;
	align-items: stretch;
	border-bottom: 1px solid ${greyLight};
	align-items: center;
	
	cursor: default;
	&:hover{
		background-color: ${greyLighter} !important;
	}

	${(props) => 
		props.station && css`
			&:first-child {
				border-top: 1px solid ${greyLight};		
	 		}

			display: flex;
			height: 3rem;
			overflow: hidden;
			align-items: stretch;
			border-bottom: 1px solid ${greyLight};
	`};

`
export const StationFlag = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	img{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 1rem;
		object-fit: cover;
	}
`

export const StationName = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	padding-left: 1.5rem;
`

export const StationAmount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: end;
	flex-grow: 1;
`



export const StyledDatePicker = styled.div`
	position: relative;	
`;

export const StyledDatePickerSvgContainer = styled.span`
	position: absolute;
	right: .5rem;
	top: 2.6rem;
	color: ${primaryColor};
	svg{
		height: 2.4rem;
		margin-right: .3rem;
	}
`

export const SvgCalendar = ()=>{
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 9v10a2 2 0 002 2h12a2 2 0 002-2V9M4 9V7a2 2 0 012-2h2M4 9h16m0 0V7a2 2 0 00-2-2h-2m0 0V3m0 2H8m0-2v2" /> </svg>
	)
}