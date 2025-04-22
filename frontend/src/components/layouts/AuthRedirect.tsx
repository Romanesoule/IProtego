'use client'

import UnderlinedButton from '@/components/ui/buttons/UnderlinedButton'
import { useRouter } from 'next/navigation'

type AuthType = 'login' | 'register'

interface Props {
    type: AuthType
}

export default function AuthRedirect({ type }: Props) {
    const router = useRouter()

    const goToLogin = () => {
        router.push('/login');
    }
    const goToRegister = () => {
        router.push('/register');
    }

    const config = {
        login: {
            text: "Pas encore de compte ?",
            buttonLabel: "Créer un compte",
            handleClick: goToRegister,
        },
        register: {
            text: "Déjà un compte ?",
            buttonLabel: "Se connecter",
            handleClick: goToLogin,
        },
    }

    const { text, buttonLabel, handleClick } = config[type]

    return (
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
            {text}{' '}
            <UnderlinedButton title={buttonLabel} handleClick={handleClick} />
        </p>
    )
}
