export default function TransparentButton({title, handleClick}) {
    return(
        <button
            onClick={handleClick}
            className="bg-transparent text-black dark:text-white border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 font-medium py-2 px-4 rounded-full transition-colors"
        >
            {title}
        </button>
    )
}
