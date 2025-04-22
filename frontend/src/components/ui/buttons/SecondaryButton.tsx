export default function SecondaryButton({title, handleClick}) {
    return(
        <button
            onClick={handleClick}
            className="w-full bg-black hover:opacity-80 text-white font-medium py-2 px-4 rounded-full shadow-sm transition-colors"
        >
            {title}
        </button>
    )
}
