import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { login } from "../store/UserSlice"
import { useDispatch } from 'react-redux';

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: user,
                    password: password,
                }),
            })

            if (response.ok) {
                const data = await response.json()
                if (data) {
                    localStorage.clear();
                    const loggedUser = {
                        username: data.username,
                        token: data.token
                    }
                    dispatch(login(loggedUser))
                    setTimeout(() => {
                        navigate("/");
                    }, 500);
                    console.log(data)
                } else {
                    console.log("error fetching data")
                }
            }
            else {
                console.log("error fetching response")
            }
        } catch (err) {
            console.error("error in fetch : ", err.message)
        }
    }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full  bg-gray-800'  >

            <div className='hidden sm:block m-auto  '>
                <img className=' h-[500px] w-[500px] object-cover' src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="side photo" />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form onSubmit={(e) => handleSubmit(e)} className=' max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white text-bold text-center'>Login In</h2>
                    <div className='flex flex-col py-2' >
                        <label className='dark:text-white' htmlFor="username">Username</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none '
                            type="text"
                            placeholder='Username'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                        />
                    </div>

                    <div className='flex flex-col py-2' >
                        <label className='dark:text-white' htmlFor="Password">Password</label>
                        <input
                            placeholder='Password'
                            className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none '
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div className='flex justify-between py-2'>
                        <p className='flex items-center text-white'><input className='mr-2' type='checkbox' /> Remember Me</p>
                        <p className='text-white'>Forget Password</p>
                    </div>

                    <button type='submit' className='my-5 py-2 w-full bg-teal-500'>Login In</button>
                </form>
            </div>

        </div>
    )
}

export default Login
