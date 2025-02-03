import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-700 text-white p-4">
      <div className="max-w-full mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Form Builder</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            {/* <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li> */}
            <li><a href="/form" className="hover:text-gray-300">Form Builder</a></li>
            <li><a href="/profile" className="hover:text-gray-300">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
