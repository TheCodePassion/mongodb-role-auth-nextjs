import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function GuestLayout({ children }) {
  const session = await getServerSession(authOptions)

  if (session) redirect('/profile')

  return <>{children}</>
}
