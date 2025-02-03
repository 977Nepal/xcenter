import React from 'react'

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-2">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default PageNotFound;
