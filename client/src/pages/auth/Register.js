import React,{useState} from 'react'
import axios from "axios";
import logo from '../../assets/logo.jpg'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();

    const[user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    let name,value;

    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value});
    };

    const PostData = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/register", user)
      .then((response) => {
        console.log(response);
        navigate('/login')
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
	};

  return (
    <div>
        <section className="bg-gray-50 py-32">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            EmpowerYouth    
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
                </h1>
                <form className="space-y-4 md:space-y-6" method="POST">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="name" name="name" value={user.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     onChange={handleInputs} placeholder="John Doe" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" value={user.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     onChange={handleInputs} placeholder="johndoe123@example.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password"  value={user.password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     onChange={handleInputs} required />
                </div>
                <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input type="confirm-password" name="confirmPassword" value={user.confirmPassword} id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInputs} required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-navblue dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                </div>
                <button type="submit" className="w-full  text-white bg-navblue hover:bg-white hover:text-navblue outline outline-1 outline-navblue font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={PostData}>Sign up</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to="/login" className="font-medium text-navblue hover:underline dark:text-primary-500">Login here</Link>
                </p>
                </form>
            </div>
            </div>
        </div>
        </section>

    </div>
  )
}

export default Register
