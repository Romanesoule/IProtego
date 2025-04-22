'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

type Props = {
    children: React.ReactNode
}

export default function PageGuard({ children }: Props) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            router.replace('/login')
            return
        }

        try {
            const decoded: { exp: number } = jwtDecode(token)
            if (decoded.exp * 1000 < Date.now()) {
                router.replace('/login')
                return
            }

            setIsAuthenticated(true)
        } catch (e) {
            router.replace('/login')
        }
    }, [router])

    if (isAuthenticated === null) {
        return <p className="text-center mt-20 text-gray-500">Vérification de l’accès...</p>
    }

    if (!isAuthenticated) return null

    return <>{children}</>
}
