import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/user.context.jsx'   

const Home = () => {
  const { user } = useContext(UserContext);
   console.log(user);
   console.log("home page");    
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default Home
