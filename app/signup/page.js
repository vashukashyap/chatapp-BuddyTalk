"use client";

import { useState, useEffect } from "react";
import dotenv from "dotenv";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";

const Signup = () => {
  const [username, setUsername] = useState(null);
  const [secret, setSecret] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userExist, setUserExist] = useState(false);


  const router = useRouter();

  useEffect(
    ()=>{
      if(username!=null){
      axios.get(
      "https://api.chatengine.io/users/",
      {headers: {"PRIVATE-KEY": process.env.API_KEY}}
    ).then((res)=> {
      for(let i=0; i<=res.data.length; i++){
        if(res.data[i].username===username){
          setUserExist(true)
          break;
        }
        setUserExist(false)
      }
    }).catch((err) => {console.log(err)})
  }
  }
    ,[username,userExist]);
  

  const signup = (e) => {
    e.preventDefault()

    if(!userExist){
      axios
      .put(
        "https://api.chatengine.io/users/",
        { username: username, secret: secret ,email: email, first_name: firstName, last_name:lastName},
        { headers: { "PRIVATE-KEY": process.env.API_KEY } }
      )
      .then((res) => {
        secureLocalStorage.setItem('username', username);
        secureLocalStorage.setItem('password', secret);
        router.push("/chats");
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }

  const login = () =>{
    router.push('/login')
  }

    


  return (
    <section className="flex justify-center md:mt-[10vh] m-4">
      <div className="md:w-fit w-full h-full md:p-10 p-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            signup(e);
          }}
          id='signup-form'
          name='signup-froms'
        >
          <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
            Sign in to Buddy Talk
          </h5>
          <div className="md:flex md:flex-row md:gap-4">
            <div className="relative z-0 w-full mb-6 group">
              <input
                id="firstname"
                name="firstname"
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required={true}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label
                htmlFor="firstname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name *
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
              id="lastname"
              name="lastname"
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required={true}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label
                htmlFor="lastname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last Name *
              </label>
            </div>
          </div>
          <div className="md:flex md:flex-row md:gap-4">
            <div className="relative z-0 w-full mb-6 group">
              <input
                id="username"
                name="username"
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required={true}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label
                htmlFor="username"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                UserName *
              </label>
              {(userExist)?(
                <div
                className="flex items-center p-2 mt-1 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Already Exist!</span>
                </div>
              </div>
              ):''}
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                id="email"
                name="email"
                type="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required={true}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email *
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Creat password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required={true}
              onChange={(e) => {
                setSecret(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <a
            onClick={login}
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              LogIn your account
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
