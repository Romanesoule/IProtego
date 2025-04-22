'use client'

import { useState } from 'react'
import DrivingLicence from '@/services/DrivingLicence'
import BaseForm from "@/components/layouts/forms/BaseForm";
import FileInput from "@/components/ui/inputs/FileInput";
import {getErrorMessage} from "@/utils/getErrorMessage";
import InfoMessage from "@/components/layouts/InfoMessage";

export default function UploadForm() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const acceptedFilesTypes = ['application/pdf', 'image/jpeg'];

    const handleUpload = async () => {
        if (!file) {
            setErrorMessage("Veuillez sélectionner un fichier.");
            return;
        }

        if (!acceptedFilesTypes.includes(file.type)) {
            setErrorMessage("Seuls les fichiers PDF ou JPEG sont autorisés.");
            return;
        }

        DrivingLicence.uploadFile(file)
            .then(response => {
                setErrorMessage(null);
                setMessage("Fichier téléversé avec succès");
            })
            .catch(err  => {
                const key = err?.response?.data?.message;
                setErrorMessage(getErrorMessage(key));
            })
    }

    return (
        <BaseForm title={'Téléversement du permis'} error={errorMessage} action={'valider'} handleValid={handleUpload}>
            <FileInput setFile={setFile}/>
            {!errorMessage && message && ( <InfoMessage message={message} type={"success"} /> )}
        </BaseForm>
    )
}
