export default function Layout({ children }) {
    return (
        <div className="font-inter max-w-[1000px] mx-auto my-0 px-4 py-20 min-h-screen">
            <main className="flex flex-col items-center gap-14">
                {children}
            </main>
        </div>
    )
}
