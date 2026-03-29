'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Projects() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [router])

  return null
}
