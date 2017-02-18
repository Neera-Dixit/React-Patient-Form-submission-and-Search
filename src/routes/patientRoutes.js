import express from 'express';
import patientService from '../services/patientService';

let expressRouter = express.Router();

let patientRouter = (patientModel,logger) => {

	expressRouter.route('/')
			 .get((req,res)=>{
			 	patientService.getPatientData(patientModel)
			 	.then((data)=>{
			 		res.status(200).send(data);
			 	})
			 	.catch((error)=>{
			 		logger.err(error);
			 		res.status(404).send(err);
			 	});
			 })
			 .post((req,res)=>{
			 	patientService.addPatientData(patientModel,req.body)
			 	.then((data)=>{
			 		res.status(200).send(data);
			 	})
			 	.catch((error)=>{
			 		logger.err(error);
			 		res.status(404).send(err);
			 	});
			 });

	return expressRouter;
}

export default patientRouter;


