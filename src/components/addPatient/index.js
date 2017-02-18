import React from 'react';
import {browserHistory} from 'react-router';
import patientActions from '../../actions/patientActions';

export default class AddPatient extends React.Component {

	constructor(){
		super();
		this.state ={
			firstNameValid : true,
			lastNameValid : true,
			ageValid : true,
			phoneValid : true,
			dobValid : true
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.validateFirstName = this.validateFirstName.bind(this);
		this.validateLastName = this.validateLastName.bind(this);
		this.validateAge = this.validateAge.bind(this);
		this.validatePhoneno = this.validatePhoneno.bind(this);
		this.validateDob = this.validateDob.bind(this);
	}

	handleFormSubmit(event){
		event.preventDefault();

		this.validateFirstName();
		this.validateLastName();
		this.validateAge();
		this.validatePhoneno();
		this.validateDob(this,true);				
	}

	validateFirstName(){
		let firstNameValid = /^[a-zA-Z]+$/.test(this.fn.value.trim());
		this.setState({firstNameValid});
	}

	validateLastName(){
		let lastNameValid = /^[a-zA-Z]+$/.test(this.ln.value.trim());
		this.setState({lastNameValid});
	}

	validateAge(){
		let ageValid = /^[0-9]{2,3}$/.test(this.age.value.trim()); 
		this.setState({ageValid});
	}

	validatePhoneno(){
		let phoneValid = /^[0-9]{10}$/.test(this.phone.value.trim());
		this.setState({phoneValid});
	}

	validateDob(obj,handleBatchStateUpdate){

		let dobValid = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(this.dob.value.trim());

		if(handleBatchStateUpdate){
			this.setState({dobValid},()=>{
				this.addNewPatientData();
			});
		}
		else{
			this.setState({dobValid});
		}

	}

	addNewPatientData(){
		if(this.validateForm()){
			patientActions.addPatientData(this.getPatientData());
			alert("Patient Data Saved Successfully");
			browserHistory.push('/viewPatients');
		}
	}

	getPatientData(){
		let {fn,ln,age,dob,gender,phone,freetext} = this;

		return {
			firstname : fn.value,
			lastName : ln.value,
			age : age.value,
			dob : dob.value,
			gender : gender.value,
			phone : phone.value,
			freeText : freetext.value
		};
	}

	validateForm(){
		const {firstNameValid,lastNameValid,ageValid,phoneValid,dobValid} = this.state;
		return firstNameValid && lastNameValid && ageValid && phoneValid && dobValid;
	}

	render(){

		return (
			
			<form id="patientform" onSubmit={this.handleFormSubmit}>
				<div>First Name : <input type="text" placeholder="FirstName" className={!this.state.firstNameValid?"invalid":""} 
					id="firstname" size="20" onChange={this.validateFirstName} ref={(fn)=>this.fn=fn} />
					<span className={this.state.firstNameValid?"hideMsg":"showMsg"}>Enter Valid First Name</span>
				</div>

				<div>Last Name : <input type="text" placeholder="LastName" className={!this.state.lastNameValid?"invalid":""} 
					id="lastname" size="20" onChange={this.validateLastName} ref={(ln)=>this.ln=ln} />
					<span className={this.state.lastNameValid?"hideMsg":"showMsg"}>Enter Valid Last Name</span>
				</div>

				<div>Age : <input type="text" placeholder="age" className={!this.state.ageValid?"invalid":""} 
					id="age" size="10" onChange={this.validateAge} ref={(age)=>this.age=age} />
					<span className={this.state.ageValid?"hideMsg":"showMsg"}>Enter Valid age like 23</span>
				</div>

				<div>DOB :<input type="text" placeholder="DD/MM/YYYY" className={!this.state.dobValid?"invalid":""}
					 id="dob" size="10" onChange={this.validateDob} ref={(dob)=>this.dob=dob} />
					 <span className={this.state.dobValid?"hideMsg":"showMsg"}>Enter Valid DOB like 04/08/1993</span>
				</div>

				Gender : <select ref={(gender)=>this.gender=gender}>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>

				<div>Phone No. :<input type="text" placeholder="0123456789" className={!this.state.phoneValid?"invalid":""}
					id="phone" size="10" onChange={this.validatePhoneno} ref={(phone)=>this.phone=phone} />
					<span className={this.state.phoneValid?"hideMsg":"showMsg"}>Enter valid phone no. of 10 digits</span>
				</div>

				<div>Text : <textarea id="freetext" placeholder="Enter Free Text"
				 	size="20" ref={(text)=>this.freetext=text} />
				</div>

				<div>
					<input type="submit" disabled={!this.validateForm()} value="Submit Data" />
				</div>

			</form>

		);

	}
}