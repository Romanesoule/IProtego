import errorMessages from '@/constants/errorMessages';

export function getErrorMessage(key?: string): string {
    if (!key || !errorMessages.hasOwnProperty(key)) return errorMessages.UNKNOWN_ERROR
    return errorMessages[key];
}
