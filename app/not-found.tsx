import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-white/60 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-[#ffdd58] transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
