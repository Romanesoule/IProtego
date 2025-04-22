const errorMessages: Record<string, string> = {
    INVALID_CREDENTIALS: "Email ou mot de passe incorrect.",
    EMAIL_ALREADY_EXISTS: "Cet email est déjà utilisé.",
    USER_NOT_FOUND: "Cet email n'existe pas",
    INVALID_TOKEN: "Identifiants non valide",
    USER_ALREADY_HAS_A_FILE: "Vous avez déja téléversé votre permis",
    PASSWORD_TOO_SHORT: "Le mot de passe doit contenir au moins 6 caractères",
    EMAIL_INVALID: "L'email n'est pas conforme",
    UNKNOWN_ERROR: "Une erreur inattendue est survenue.",
}

export default errorMessages
