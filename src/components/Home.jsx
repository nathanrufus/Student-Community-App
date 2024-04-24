import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ items }) {
    const navigate = useNavigate()
    const Detail = () => {
        navigate("/details")
    }
    const My_cart = () => {
        navigate("/cart")
    }
    return <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 ">
        <div className=" flex justify-between items-center">
            <h2 className=" text-2xl text-blue-800 my-4">Items</h2>
            <button onClick={My_cart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">My cart</button>
        </div>
        <div className=" space-x-5  items-center justify-center grid md:grid-cols-4 md:gap-4 grid-cols-1 overflow-scroll">
            {
                items && items.map((obj) => (
                    <div key={obj.id} >
                        <div onClick={Detail} class=" max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={obj.item_photo} alt="Sunset in the mountains" />
                            <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                                <img class="w-full max-w-14 rounded" src={obj.seller_photo} alt="Sunset in the mountains" />
                                <h2 class="font-bold text-xl mb-2">{obj.seller_name}</h2>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{obj.price}</span></h1>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>


    </div>;
}

export default Home;
