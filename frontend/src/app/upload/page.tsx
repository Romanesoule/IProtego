'use client'

import UploadForm from "@/components/layouts/forms/UploadForm";
import PageGuard from "@/components/security/PageGuard";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import { useRouter } from 'next/navigation'

export default function Upload() {

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <PageGuard>
            <UploadForm />
            <div className="mt-6 flex justify-center">
                <TransparentButton title="Me déconnecter" handleClick={logout} />
            </div>
        </PageGuard>
    )
}
