"use client"

import Button from '@/componets/ui/Button'
import { signOut } from 'next-auth/react'

export default function Home() {
  return <button onClick={() => signOut()}>Sign out</button>
}