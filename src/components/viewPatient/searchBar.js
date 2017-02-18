import React from 'react';

export default class SearchBar extends React.Component {

	constructor(){
		super();

		this.searchPatient = this.searchPatient.bind(this);
	}

	searchPatient()
	{
		this.props.search(this.inputText.value.trim());
	}

	render(){
		return (
			
			<div>
				<input type="text" size="20"
				onChange={this.searchPatient} 
				ref={(input)=>this.inputText=input}/>
			</div>

		);
	}
}