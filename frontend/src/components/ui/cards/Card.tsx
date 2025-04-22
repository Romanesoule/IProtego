export default function Card({children}) {
    return(
        <div className="py-20 flex items-center justify-center dark:bg-neutral-950 px-4">
            <div className="max-w-md w-full text-center space-y-8 p-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 transition-colors">
                {children}
            </div>
        </div>
    )
}