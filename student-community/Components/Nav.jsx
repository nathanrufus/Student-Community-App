'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  // Mock authentication status and user profile picture
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to false to see unregistered user view
  const userProfilePicture = 'https://via.placeholder.com/40'; // Replace with actual profile picture URL

  return (
    <nav className="bg-gray-800 p-4 rounded-sm">
      <div className="container mx-auto flex justify-between items-center bg-blue-800">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white text-lg font-semibold hover:text-gray-300">
            Home
          </Link>
          <Link href="/explore" className="text-white text-lg hover:text-gray-300">
            Explore
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link href="/post">
                <button className="bg-blue-600 text-white text-lg px-4 py-2 rounded hover:bg-blue-500">
                  POST
                </button>
              </Link>
              <Link href="/cart" className="text-white text-lg hover:text-gray-300">
                Shopping Cart
              </Link>
              <Link href="/profile/edit">
                <Image
                  src='/im2.jpg'
                  alt="Profile"
                  className="w-10 h-10 rounded-full hover:opacity-80"
                  height={40}
                  width={40}
                />
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white text-lg hover:text-gray-300">
                Login
              </Link>
              <Link href="/register" className="text-white text-lg hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
