import React from 'react'
import Select from 'react-select'

// const options = [
// 	{ value: 'chocolate',label: 'Chocolate' },
// 	{ value: 'strawberry',label: 'Strawberry' },
// 	{ value: 'vanilla',label: 'Vanilla' }
// ]

const Select1 = ({ selectOptions,test,label} ) => (
	<div>
		<label>{label}</label>
		<Select options={selectOptions} className="default-input" placeholder={selectOptions[0].countryName} />
	</div>
)

export default Select1