'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
function profile() {
  const { data, status } = useSession()
  const isAuth = status === 'authenticated'
  if (isAuth)
    return (
      <p>
        {data?.user?.name} <button onClick={() => signOut()}> logout</button>
      </p>
    )

  return (
    <ul className="flex items-center space-x-6">
      <li>
        <Link href="/auth/sign-in">Login </Link>
      </li>
      <li>
        <Link
          className="bg-blue-500 text-white rounded p-3 inline-block shadow-sm"
          href="/sing-up"
        >
          Sing Up{' '}
        </Link>
      </li>
    </ul>
  )
}
export default profile
