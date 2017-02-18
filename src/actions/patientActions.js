import Dispatcher from '../dispatcher/index';

let patientActions = {

	addPatientData : (patientData)=>{
		Dispatcher.dispatch({
			actionType : "ADDNEWPATIENT",
			patientData
		});
	},	

	getPatientData : (patientData)=>{
		Dispatcher.dispatch({
			actionType : "GETPATIENTDATA"
		});
	}

};

export default patientActions