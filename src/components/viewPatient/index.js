import React from 'react';
import patientActions from '../../actions/patientActions';
import patientStore from '../../stores/patientStore';
import PatientList from './patientList';
import SearchBar from './searchBar';

export default class ViewPatient extends React.Component {

	constructor(){
		super();
		this.state = {
			queryText : "",
			patientList : []
		};

		this.getPatientList= this.getPatientList.bind(this);
		this.searchPatient=this.searchPatient.bind(this);
	}

	searchPatient(queryText){
		this.setState({
			queryText
		});
	}

	componentDidMount(){
		patientActions.getPatientData();
	}

	componentWillMount(){
		patientStore.on("fetchedData",this.getPatientList);
	}

	componentWillUnmount(){
		patientStore.removeListener("fetchedData",this.getPatientList);
	}

	getPatientList(){
		this.setState({ patientList : patientStore.getPatientList()});
	}

	render(){
		
		return (
			<div id="viewPatient">
				<SearchBar search={this.searchPatient}/>
				<PatientList queryText={this.state.queryText} patientList={this.state.patientList}/>
			</div>
		);
	}

}