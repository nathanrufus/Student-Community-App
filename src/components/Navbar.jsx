import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()

    return (
        <div class=" fixed top-0 left-0 right-0 md:px-12  max-w-screen-2xl mx-auto" >
            <div class="h-full px-3 py-4 overflow-y-auto bg-blue-500 dark:bg-gray-800 flex justify-between">
                <ul class="space-y-2 font-medium flex flex-row">
                    <Link>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="ms-3 text-2xl">Dashboard</span>
                        </a>
                    </Link>
                    <Link to="/home">
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
                        </a>
                    </Link>
                    <Link to='explore'>
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span class="flex-1 ms-3 whitespace-nowrap">Explore</span>
                        </div>
                    </Link>
                    <Link>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                        </a>
                    </Link>
                    {/* <Link>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span class="flex-1 ms-3 whitespace-nowrap">Posts</span>
                        </a>
                    </Link> */}
                    <Link to='signin'>
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                            <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                        </div>
                    </Link>
                    <Link to='create'>
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                            <span class="flex-1 ms-3 whitespace-nowrap">Create</span>
                        </div>
                    </Link>
                    <div  >
                        <Link to="/signup" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                            <Link to="/signup" class="flex-1 ms-3 whitespace-nowrap">Sign Up</Link>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>


    )
}

export default Navbar;
