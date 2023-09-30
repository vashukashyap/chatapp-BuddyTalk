"use client"

import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import "tailwindcss/tailwind.css";
import dotenv from 'dotenv';


const Login = () => {

  const [ username, setUsername] = useState(secureLocalStorage.getItem('username'));
  const [secret, setSecret ] = useState(secureLocalStorage.getItem('password'));
  const [userExist, setUserExist] = useState(false);
  const router = useRouter();


  useEffect( () => {
    console.log(username,secret)
    if(username!=null && secret!=null){
      router.push('/chats')
    }
  },[])

  useEffect(
    ()=>{
      axios.get(
      "https://api.chatengine.io/users/",
      {headers: {"PRIVATE-KEY":process.env.API_KEY}}
    ).then((res)=> {
      for(let i=0; i<=res.data.length; i++){
        if(res.data[i].username==username){
          setUserExist(true)
          break;
        }
        setUserExist(false)
      }
    }).catch((err) => {console.log(err)})
  }
    ,[username,userExist]);

  const login = (e)=>{
      e.preventDefault()
      if(userExist){
      secureLocalStorage.setItem('username', username);
      secureLocalStorage.setItem('password', secret);
      router.push("/chats");
      }
  }

  const signup = () =>{
    router.push('/signup')
  }






  return (
    <section className="flex justify-center mt-[10vh]">
      <div className="w-full bg-white max-w-sm p-4 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={(e)=>login(e)}>
          <h5 className="text-xl flex justify-center font-medium text-gray-900 dark:text-white">
            LogIn to Buddy Talk
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="eg: Ramu"
              required={true}
              onChange={(e) => {setUsername(e.target.value)}}
            />

{(!userExist && username!=null)?(
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
                  <span className="font-medium">User Does't exist!</span>
                </div>
              </div>
              ):''}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              minLength='8'
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required={true}
              onChange={(e) => {setSecret(e.target.value)}}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LogIn to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
            onClick={signup}
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
