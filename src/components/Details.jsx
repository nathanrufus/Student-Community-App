import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "./Assets/5r.jpeg";
import { FcElectronics } from "react-icons/fc";

function Details() {
    const [item, setitem] = useState({});
    const { id } = useParams(); // Get the user_id from the URL


    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/singleitem", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setitem(data);
                } else {
                    console.error("Failed to fetch items");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchdata();
    }, []);

    return (
        <div className="mt-20 max-w-screen-2xl md:px-14 p-4">
            <div className=" md:flex flex-row space-x-20">
                <div class=" max-w-lg rounded overflow-hidden shadow-lg mt-6  ">
                    <img class="w-full" src={image} alt="Sunset in the mountains" />
                    <div class="px-6 py-4 flex justify-baseline items-center space-x-5">
                        <img class="w-full max-w-14 rounded" src={image} alt="Sunset in the mountains" />
                        <h2 class="font-bold text-xl mb-2">Nathan kibet</h2>
                    </div>
                    <h2 className=" text-xl px-6 text-blue-700 font-semibold">Description:</h2>
                    <p className=" px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, incidunt quas! Hic excepturi aspernatur vitae veritatis magni ut unde eos amet dicta perspiciatis saepe, totam quos possimus officiis? Aspernatur, maxime!</p>
                    <div class="px-6 pt-4 pb-2 flex space-x-5">
                        <h1>Price:<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">300sh</span></h1>
                        <h1 className=" items-center justify-center flex">Category:<span class="inline-block  rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2"><FcElectronics /></span></h1>
                    </div>
                    <div className=" px-6">
                        <button className=" rounded-md bg-blue-800  text-white px-3 py-1 mb-3 hover:bg-blue-400 transition-all duration-300">Buy Now</button>
                    </div>
                </div>
                <div>
                    <h2 className=" text-2xl text-blue-700 mb-6 mt-4">Pictures</h2>
                    <div className=" grid grid-cols-3 gap-3">
                        <img src={image} alt="" className=" w-full" />
                        <img src={image} alt="" className=" w-full" />
                        <img src={image} alt="" className=" w-full" />
                        <img src={image} alt="" className=" w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
