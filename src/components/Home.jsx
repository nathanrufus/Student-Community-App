import React from "react";
import image from "./Assets/5r.jpeg"

function Home() {
    return <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 ">
        <div className="mt-3  items-center justify-start">
            <form class="flex items-center max-w-lg mx-auto">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                        </svg>
                    </div>
                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                        </svg>
                    </button>
                </div>
                <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>Search
                </button>
            </form>
        </div>


        <h2 className=" text-2xl text-blue-800 my-4">Items</h2>
        <div className=" space-x-5  items-center justify-center grid md:grid-cols-4 md:gap-4 grid-cols-1 overflow-scroll">
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
