export default function Input({type, placeholder, value, handleChange}) {
    return(
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400 bg-transparent text-gray-900 dark:text-white"
            required
        />
    )
}