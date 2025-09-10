import { Router } from "express";
import { body } from "express-validator"; 
import * as createUserController  from "../Controllers/user.controller.js";

const router = Router();


router.post('/register', 
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    createUserController.createUserController
);

export default router; 