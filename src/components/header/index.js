import React from 'react';
import {IndexLink,Link} from 'react-router';

export default class Header extends React.Component {

	constructor(){
		super();
	}

	render(){

		return (
		  <div id="header">	
			<ul>
				<li><IndexLink to="/">Add Patient</IndexLink></li>
				<li><Link to="viewPatients">View Patients</Link></li>
			</ul>
		  </div>
		)
	}
}