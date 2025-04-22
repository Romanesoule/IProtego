export default function UnderlinedButton({title, handleClick}) {
    return(
        <button
            onClick={handleClick}
            className="text-blue-600 hover:underline font-medium"
        >
            {title}
        </button>
    )
}