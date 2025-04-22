'use client'

import AuthForm from "@/components/layouts/forms/AuthForm";
import AuthRedirect from "@/components/layouts/AuthRedirect";

export default function Register() {

    return (
        <AuthForm title="Inscription" action="S'inscrire" method="register">
            <AuthRedirect type={'register'} />
        </AuthForm>
    );
}
