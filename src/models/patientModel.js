let model = (mongoose)=>{

	let schema = mongoose.Schema;

	 let patientSchema = new schema({
	 	firstname : String,
	 	lastName : String,
	 	age : Number,
	 	dob : String,
	 	gender : String,
	 	phone : Number,
	 	freeText : String
	 });

	 let patientModel = mongoose.model('patient',patientSchema);

	 return patientModel
};

export default model;