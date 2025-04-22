export default function FileInput({setFile}) {
    return(
        <input
            type="file"
            accept=".pdf,.jpeg"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-900 dark:text-white"
        />
    )
}