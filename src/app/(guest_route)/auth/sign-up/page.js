'use client'
import { useState } from 'react'
import InputField from '@/app/components/inputField'

export default function Singup() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = userInfo

  const handleChange = ({ target }) => {
    const { name, value } = target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await fetch('/api/auth/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
      } else {
        console.error('error while req')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-1/3" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Sing Up
        </button>
      </form>
    </div>
  )
}
