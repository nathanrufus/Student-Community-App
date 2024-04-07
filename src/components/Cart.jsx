import React from "react";
import image from "./Assets/5r.jpeg"
import { useNavigate } from "react-router-dom";


function Cart() {
    const navigate = useNavigate()
    const Buy = () => {
		navigate("/creditcard")
	}
    return <div className="mt-20 max-w-screen-2xl md:px-14 p-4  ">
        <div className=" space-x-5  items-center justify-center grid md:grid-cols-4 md:gap-4 grid-cols-1">
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
        <div className=" mt-8">
            <h1>Total amount:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>
            <button onClick={Buy} className=" rounded-md bg-blue-800  text-white px-3 py-1 mb-3 hover:bg-blue-400 transition-all duration-300">Proceed to buy</button>

        </div>

    </div>;
}

export default Cart;
