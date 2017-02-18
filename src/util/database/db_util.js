import mongoose from 'mongoose';
import config from '../../config';

let dbCon = (logger) => {

	mongoose.connection.on('connected',()=>{
		logger.info("Connected to MongoDB");
	});

	mongoose.connection.on('disconnected',()=>{
		logger.info("Disconnected to MongoDB")
	});

	mongoose.connection.on('error',()=>{
		logger.error("Error Connecting to MongoDB")
	});

	mongoose.connect(`${config.dbUrl}/${config.dbName}`);

	return mongoose;
};

export default dbCon;


