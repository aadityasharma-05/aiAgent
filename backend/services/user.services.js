import User from '../models/user.models.js';

export const createUser = async ({
    email, password
} ) => {
   if(!email || !password) {
    throw new Error("All fields are required");
   }

   const hashedPassword = await User.hashPassword(password);
   const user = await User.create({
    email,
    password : hashedPassword
   }) 

   return user ; 
}   