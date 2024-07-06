import express from 'express';
import UsersModel from '../models/Users.model.js';
const router = express.Router();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// import twilio from 'twilio';

async function authMiddleware(req,res,next){
    try {
        console.log('Inside middleware : authMiddleware method' );
        let authToken = req.headers['auth-token'];
        let userData = await jwt.verify(authToken, 'CFI_A24');
        req.userData = userData;
        next();
    } catch (error) {
        console.log('Inside middleware : authMiddleware method' );
        return res.status(401).json({error : "Invalid authorisation token"});
    }
}



router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        let findUser = await UsersModel.findOne({ email: req.body.email });
        if (findUser) {
            return res.status(409).json({ message: 'User already registered please login' });
        }
        req.body.password = await bcrypt.hash(req.body.password, 12);
        let userData = new UsersModel(req.body);
        await userData.save();
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error' });
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        let findUser = await UsersModel.findOne({ email: req.body.email });
        if (!findUser) {
            return res.status(404).json({ message: 'User not found please Signup' });
        }
        let checkPassword = await bcrypt.compare(req.body.password, findUser.password);
        if (!checkPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        let jwtPayload = {
            _id: findUser._id,
            email: findUser.email,
            phone: findUser.phone,
            countryCode: findUser.countryCode
        }
        let token = await jwt.sign(jwtPayload, 'CFI_A24', { expiresIn: '5d' });
        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error' });
    }
})


router.get('/user-data', authMiddleware, async (req, res) => {
   
    let findUser = await UsersModel.findOne({ email: req.body.email });
    try{
        if (!findUser) {
            return res.status(409).json({ message: "User not found" });
        }
        res.status(200).json({ message: 'User data fetched successfully', data: findUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error.' });
    }
});


export default router;