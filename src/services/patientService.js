let patientService = {

	getPatientData : (patientModel)=>{

		return new Promise((resolve,reject)=>{

			patientModel.find({},(err,data)=>{
				if(data){
					resolve(data)
				}
				else{
					reject(err);
				}

			});

		});
		
	},

	addPatientData : (patientModel,patientData)=>{

		return new Promise((resolve,reject)=>{

			new patientModel(patientData).save((err,data)=>{
				if(data){
					resolve(data)
				}
				else{
					reject(err);
				}

			});

		});
		
	},
};

export default patientService;