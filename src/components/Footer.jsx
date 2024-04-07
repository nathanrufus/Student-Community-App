import React from "react";

function Footer() {
    return <div class=" md:px-14">
        <div class="max-w-screen-2xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto bg-blue-400  ">
            <div class="p-5 sm:w-2/12 border-r">
                <div class="text-sm uppercase text-indigo-600 font-bold">Menu</div>
                <ul>
                    <li class="my-2">
                        <a class="hover:text-indigo-600" href="#">Home</a>
                    </li>
                    <li class="my-2">
                        <a class="hover:text-indigo-600" href="#">Crops</a>
                    </li>
                    <li class="my-2">
                        <a class="hover:text-indigo-600" href="#">Fruits</a>
                    </li>
                    <li class="my-2">
                        <a class="hover:text-indigo-600" href="#">Animals</a>
                    </li>
                </ul>
            </div>
            <div class="p-5 sm:w-7/12 border-r text-center">
                <h3 class="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
                <p class=" text-sm mb-10">With the new product market app, users can effortlessly browse, compare, and purchase a wide range of items from various sellers, all in one convenient platform.</p>
            </div>
            <div class="p-5 sm:w-3/12">
                <div class="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
                <ul>
                    <li class="my-2">
                        <a class="hover:text-indigo-600" href="#">+254799594578</a>
                    </li>
                    <li class="my-2">
                        <a class="hover:text-indigo-600" href="#">nathanrufus@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
            <div class="my-5">© Copyright 2024. All Rights Reserved.</div>
        </div>
    </div>
}

export default Footer;
