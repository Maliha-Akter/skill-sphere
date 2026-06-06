import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
            <h1 className="text-8xl font-bold text-purple-900">404</h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 text-center max-w-md mt-3">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link href="/">
                <button className="btn bg-purple-900 text-white mt-8">
                    Back to Home
                </button>
            </Link>
        </div>
    );
}