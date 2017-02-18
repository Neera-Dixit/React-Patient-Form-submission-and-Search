import React from 'react';

export default class PatientList extends React.Component {

	constructor(){
		super();
	}

	render(){

		const {patientList,queryText}= this.props;
		
		const patients = this.props.patientList.map((patient)=>{
			if(patient.firstname.toLowerCase().indexOf(queryText.toLowerCase())!=-1 || patient.lastName.toLowerCase().indexOf(queryText.toLowerCase())!=-1){
				return <div key={patient._id}>{patient.firstname} {patient.lastName}</div>;
			}	
		});


		return (

			<div id="patientList">
				{patients}
			</div>
		);
	}
}