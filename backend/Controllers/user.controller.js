import User from '../models/user.models.js';
import * as  userServices from '../services/user.services.js';
import { validationResult } from 'express-validator';

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
