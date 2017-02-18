import React from 'react';
import Header from './header/index';

export default class App extends React.Component {

	constructor(){
		super();
	}

	render(){

		return (
			
			<div>
				<Header />
				{this.props.children}
				
			</div>
		)
	}
}