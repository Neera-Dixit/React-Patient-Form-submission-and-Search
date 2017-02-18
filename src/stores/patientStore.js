import Dispatcher from '../dispatcher/index';
import AjaxService from '../services/ajaxServices';
import config from '../config';
import {EventEmitter} from 'events';

class PatientStore extends EventEmitter{

 	constructor(){
 		super();
 		this.patientList=[];
 	}

 	addNewPatientData(data){
 		AjaxService.post(config.addNewPatientUrl,data)
 		.then((data)=>{
 			console.log(data);
 		})
 		.catch((err)=>{
 			console.log(err);
 		});
 	}

 	getPatientList(){
 		return this.patientList;
 	}

 	fetchPatientData(){
 		AjaxService.get(config.viewPatientsUrl)
 		 		.then((data)=>{
 		 			this.patientList = data;
 		 			this.emit("fetchedData");
 		 		})
 		 		.catch((err)=>{
 		 			console.log(err);
 		 		});
 	}

 	patientActionListener(action){
 		switch(action.actionType){
 			case "ADDNEWPATIENT" : {
 				this.addNewPatientData(action.patientData);
 				break;
 			}

 			case "GETPATIENTDATA" : {
 				this.fetchPatientData();
 				break;
 			}
 		}
 	}
}

let patientStore = new PatientStore();
Dispatcher.register(patientStore.patientActionListener.bind(patientStore));
export default patientStore;