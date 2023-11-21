import React, { useState } from "react";
import logo from '../../assets/logo.jpg'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {



    const navigate = useNavigate();

    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    let name, value;
  
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
  
      setUser({ ...user, [name]: value });
    };
  
    const loginUser = async (e) => {
      e.preventDefault();
      axios
      .post("http://localhost:8000/auth/login", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("Name", response.data.user.name);
        navigate('/')
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
    //   try {
    //     const url = "http://localhost:8000/auth/login";
    //     const { user: res } = await axios.post(url, user).then((response) => {
    //       localStorage.setItem("Name", response.data.name);
    //     });
    //     console.log(res.message);
    //   } catch (error) {
    //     if (
    //       error.response &&
    //       error.response.status >= 400 &&
    //       error.response.status <= 500
    //     ) {
    //       alert("Invalid Credentials");
    //     }
    //   }
    };

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2 text-navblue" src={logo} alt="logo" />
            EmpowerYouth    
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" value={user.email} onChange={handleInputs} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputs} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full  text-white bg-navblue hover:bg-white hover:text-navblue outline outline-1 outline-navblue font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={loginUser}>Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to="/register" className="font-medium text-navblue hover:underline">Sign up</Link>
                </p>
                </form>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login
