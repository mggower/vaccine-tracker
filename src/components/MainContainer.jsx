import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';

import Chart from './Chart.jsx';
import Vaccine from './Vaccine.jsx';
import Login from './Login.jsx';
import BarChart from './BarChart.jsx';

export default () => {
	const [ user ] = useContext(UserContext);

	return user && user.loggedIn ? (
		<div className='main-container'>
			<Vaccine />
			<BarChart />
		</div>
	) : (
		<div className='main-container'>
			<Login />
			<Vaccine />
			<BarChart />
			<Chart />
		</div>
	);
};
