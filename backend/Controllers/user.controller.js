import User from '../models/user.models.js';
import router from '../routes/user.routes.js';
import * as  userServices from '../services/user.services.js';
import { validationResult } from 'express-validator';
import redisClient from '../services/redis.services.js';

export const createUserController = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   try {
       const user = await userServices.createUser(req.body);

       const token = user.generateJwtToken();
       return res.status(201).json( {user , token} );
   } catch (error) {
       return res.status(500).json(  error.message );
   }
};

export const loginUserController = async (req, res) => {
   const { email, password } = req.body;    
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const user = await User.findOne({ email }).select("+password");; 
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }   
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = user.generateJwtToken();
        return res.status(200).json({ user, token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const profileController = async (req, res) => {
  try {
    res.status(200).json({
      user: req.user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logoutController = async (req, res) =>{

    try {
         const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
         if(token){
            await redisClient.set( token , 'logout', 'EX ',  60 * 60 * 24  );
         } 
         
            res.status(200).json({ message : "User logged out successfully" });


    } catch (error) {
        
    }
}