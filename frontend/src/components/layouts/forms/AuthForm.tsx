'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Auth from '@/services/Auth'
import { getErrorMessage } from '@/utils/getErrorMessage'
import BaseForm from "@/components/layouts/forms/BaseForm";
import Input from "@/components/ui/inputs/Input";

export default function AuthForm({ title, action, method, children }) {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleValid = async () => {
        if (!email || !password) {
            return setError('veuillez remplir tous les champs')
        }
        Auth[method]({email, password})
            .then(res => {
                localStorage.setItem('token', res.data.token);
                router.push('/upload');
            })
            .catch(err => {
                const key = err?.response?.data?.message;
                setError(getErrorMessage(key));
            })

    }

    return (
        <BaseForm title={title} error={error} action={action} handleValid={handleValid}>
            <Input type="email" placeholder="Email" value={email} handleChange={setEmail}/>
            <Input type="password" placeholder="Mot de passe" value={password} handleChange={setPassword}/>
            {children}
        </BaseForm>
    )
}
