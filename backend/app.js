import express from 'express';
import './dbConnect.js'; //Connect to DB
import UserRoutes from './controllers/UserControllers.js';
import cors from 'cors';

const app = express();

const port = 8085;

//JSON 
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/',(req,res)=>{
    res.send('Express is UP')
});

app.use('/api/users',UserRoutes );

app.listen(port,()=>{
    console.log(`Server is Up on Port ${port}`);
})
