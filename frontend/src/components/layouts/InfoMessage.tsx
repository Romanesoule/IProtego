export default function InfoMessage({message, type}) {

    const messageTypesColor = {
        error: 'text-sm px-3 py-1 rounded-md border text-red-500 border-red-400 bg-red-50 dark:bg-red-900 dark:text-red-300',
        success: 'text-sm px-3 py-1 rounded-md border text-green-600 border-green-400 bg-green-50 dark:bg-green-900 dark:text-green-300',
        warning: 'text-sm px-3 py-1 rounded-md border text-orange-600 border-orange-400 bg-orange-50 dark:bg-orange-900 dark:text-orange-300',
    };

    const styleClass = messageTypesColor[type] || messageTypesColor.error;

    return(
        <div className={styleClass}>{message}</div>
    )
}