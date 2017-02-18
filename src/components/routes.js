import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import AddPatient from './addPatient/index';
import ViewPatients from './viewPatient/index';
import App from './app';

export default class AppRouter extends React.Component {

	constructor(){
		super();
	}

	render(){

		return (
			<Router history = {browserHistory}>
				<Route path = "/" component = {App}>
					<IndexRoute component={AddPatient} />
					<Route path="viewPatients" component={ViewPatients} />
				</Route>
			</Router>
		);
	}
}