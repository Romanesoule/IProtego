export default function PrimaryButton({title, handleClick}) {
    return(
        <button
            onClick={handleClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full shadow-sm transition-colors"
        >
            {title}
        </button>
    )
}
