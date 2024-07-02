// import express from 'express';
// import bcrypt from 'bcrypt';
// import UsersModel from '../models/Users.model.js';
// const router = express.Router();


// router.post('/register', async (req, res) => {
//     try {
//         console.log(req.body);
//         let findUser = await UsersModel.findOne({email : req.body.email });
//         if(findUser){
//             return res.status(409).json({ message: 'User already registered please login' });
//         }
//         // body.password = await bcrypt.hash(body.password,11);
//         req.body.password = await bcrypt.hash(req.body.password, 11);
//         let userData = new UsersModel(req.body);
//         await userData.save();
//         res.status(200).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server error' });
//     }
// })  

// export default router;
// this is similar to login by sir

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersModel from '../models/Users.model.js';

const router = express.Router();
// middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.userId = decoded.userId;
        next();
    });
}

router.post('/register', async (req, res) => {
    try {
        // console.log(req.body);
        let findUser = await UsersModel.findOne({ email: req.body.email });
        if (findUser) {
            return res.status(409).json({ message: 'User already registered. Please login.' });
        }
        req.body.password = await bcrypt.hash(req.body.password, 11);
        console.log(req.body)
        let userData = new UsersModel(req.body);
        await userData.save();
        res.status(200).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error.' });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        // If email and password are correct, generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, 'secretKey', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error.' });
    }
});

router.get('/user-data', verifyToken, async (req, res) => {
    try {
        const userData = await UsersModel.findById(req.userId);
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User data fetched successfully', data: userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error.' });
    }
});


export default router;

