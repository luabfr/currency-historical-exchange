import React from 'react'

const MyList = ({ myJson }) => (
	<ul className="MyList">
		{myJson.map(station => (
			<li className="station" key={station.countryName}>
				<div className="station--flag">
					<img src="https://flagcdn.com/w40/" srcset={"https://flagcdn.com/w40/" + station.flag } alt="png"/>
				</div>
				<div className="station--name">{ station.countryName }</div>
				<div className="station--amount">{ station.currency }</div>
			</li>
		))}
	</ul>
);

export default MyList