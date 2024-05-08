import React, { useState } from 'react';
import { Link ,Navigate} from 'react-router-dom';


const Signup = () => {
  
    const initialFormData ={
        username: '',
        email: '',
        password: '',
    }

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmit , setIsSubmit]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   setIsSubmit(true);
    setFormData(initialFormData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">

      {
        isSubmit? (<Navigate to={"/login"} replace={true}/>):
         (<form onSubmit={handleSubmit} className="bg-white w-[600px] m-10 md:m-0 md:p-8 p-4 rounded-lg shadow-md backdrop-blur-lg backdrop-filter bg-opacity-50">
        <div>
        <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 rounded-md"
        >
          Sign Up
        </button>
        <div className='mt-3'>
            <p>Already have an account? <Link className='font-bold text-gray-600 hover:text-gray-800' to="/login" >Login </Link></p>
        </div>
        </div>
        
      </form>)
      }
      
    </div>
  );
};

export default Signup;


