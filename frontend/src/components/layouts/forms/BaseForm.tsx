'use client'

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import InfoMessage from "@/components/layouts/InfoMessage";
import Card from "@/components/ui/cards/Card";

export default function BaseForm({ title, children, action, handleValid, error } ) {

    return (
        <Card>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h1>
            {children}
            {error && ( <InfoMessage message={error} /> )}
            <PrimaryButton title={action} handleClick={handleValid}/>
        </Card>
    )
}
