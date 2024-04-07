import React, { useState } from "react";
import image from "./Assets/5r.jpeg"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const [open, setopen] = useState(false)

    const categories = () => {
        open(!setopen)
    }
    const Detail = () => {
        navigate("/details")
    }
    const My_cart = () => {
        navigate("/cart")
    }
    return <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 ">

        <form class=" max-w-lg mx-auto">
            <div class="flex">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
                <div onClick={() => categories(open)} id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                        </li>
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                        </li>
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                        </li>
                        <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                        </li>
                    </ul>
                </div>
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
        <div className=" flex justify-between items-center">
            <h2 className=" text-2xl text-blue-800 my-4">Items</h2>
            <button onClick={My_cart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">My cart</button>
        </div>
        <div className=" space-x-5  items-center justify-center grid md:grid-cols-4 md:gap-4 grid-cols-1 overflow-scroll">
            <div onClick={Detail} class=" max-w-sm rounded overflow-hidden shadow-lg">

                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                    <img class="w-full max-w-14 rounded" src={image} alt="Sunset in the mountains" />
                    <h2 class="font-bold text-xl mb-2">Nathan kibet</h2>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>

                </div>
            </div>
            <div class=" max-w-sm rounded overflow-hidden shadow-lg">

                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                    <img class="w-full max-w-14 rounded" src={image} alt="Sunset in the mountains" />
                    <h2 class="font-bold text-xl mb-2">Nathan kibet</h2>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>

                </div>
            </div>
            <div class=" max-w-sm rounded overflow-hidden shadow-lg">

                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                    <img class="w-full max-w-14 rounded" src={image} alt="Sunset in the mountains" />
                    <h2 class="font-bold text-xl mb-2">Nathan kibet</h2>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>

                </div>
            </div>
            <div class=" max-w-sm rounded overflow-hidden shadow-lg">

                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                    <img class="w-full max-w-14 rounded" src={image} alt="Sunset in the mountains" />
                    <h2 class="font-bold text-xl mb-2">Nathan kibet</h2>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>

                </div>
            </div>
            <div class=" max-w-sm rounded overflow-hidden shadow-lg">

                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                    <img class="w-full max-w-14 rounded" src={image} alt="Sunset in the mountains" />
                    <h2 class="font-bold text-xl mb-2">Nathan kibet</h2>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>

                </div>
            </div>
        </div>
    </div>;
}

export default Home;
