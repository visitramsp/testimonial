import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    sessionStorage.setItem('isLoggedIn', true);
    navigate("/home")

  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-96 h-80 shadow rounded-md shadow-gray-400 border border-gray-300 m-auto p-5'>
        <p className='text-center mb-4 font-bold text-xl'>Login</p>
        <div className='flex flex-col gap-5'>
          <input
            type='text'
            placeholder='Enter username'
            className='border border-gray-300 w-full p-2 rounded-md'
          />
          <input
            type='text'
            placeholder='Enter password'
            className='border border-gray-300 w-full p-2 rounded-md'
          />
          <button type='button' onClick={handleSubmit} className='capitalize font-medium text-sm bg-green-400 rounded-md p-2 text-white'>
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
