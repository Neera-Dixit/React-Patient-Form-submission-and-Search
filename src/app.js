import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config';
import logger from './util/logger/index';
import patientRoutes from './routes/patientRoutes';
import mongoDbCon from './util/database/db_util';
import model from './models/patientModel';
import winstonReqLogger from './middleware/winstonRequestLogger';

let app = express();
let mongooseObj = mongoDbCon(logger);
let patientModel = model(mongooseObj);

app.use(express.static(path.join(__dirname+'/../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(winstonReqLogger(logger));

app.use('/patient',patientRoutes(patientModel,logger));

app.get('*',(req,res)=>{
	res.sendFile(__dirname+'/views/index.html');
})
app.listen(config.serverPort,()=>{
	console.log("Express server listening at ",config.serverPort);
});