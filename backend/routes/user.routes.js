import { Router } from "express";
import { body } from "express-validator"; 
import * as createUserController  from "../Controllers/user.controller.js";
import * as authMiddleware from "../middleware/auth.js"

const router = Router();


router.post('/register', 
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    createUserController.createUserController
);

router.post('/login', 
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 6 characters long'),
    createUserController.loginUserController
);

router.get(
   "/profile", authMiddleware.authUser, createUserController.profileController
)

router.get(
   "/logout", authMiddleware.authUser, createUserController.logoutController
);


export default router; 