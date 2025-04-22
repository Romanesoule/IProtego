'use client'

import AuthForm from "@/components/layouts/forms/AuthForm";
import AuthRedirect from "@/components/layouts/AuthRedirect";

export default function Login() {

    return (
        <AuthForm title={"Connexion"} action={"Se connecter"} method={'login'}>
            <AuthRedirect type={'login'} />
        </AuthForm>
    )
}
