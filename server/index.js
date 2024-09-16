import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';




const app =express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json({extended :true}));

app.use('/',Routes);


const PORT=8000;

Connection();

app.listen(PORT,() => console.log(`Server running succesfully on PORT ${PORT}`));