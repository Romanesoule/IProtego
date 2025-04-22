'use client'

import { useRouter } from 'next/navigation'
import Card from "@/components/ui/cards/Card";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function Home() {
    const router = useRouter();

    const goToLogin = () => {
        router.push('/login');
    }

    const goToRegister = () => {
        router.push('/register');
    }

    return (
        <Card>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bienvenue</h1>
            <p className="text-gray-600 dark:text-gray-400">
                Veuillez vous connecter ou créer un compte pour continuer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButton title={"Me connecter"} handleClick={goToLogin} />
                <SecondaryButton title={"M'inscrire"} handleClick={goToRegister}/>
            </div>
        </Card>
    )
}
