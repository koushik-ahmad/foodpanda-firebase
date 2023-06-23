import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="bc9273ce-29bb-4565-959b-714607d4d027"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Choose</span>
                    </span>{' '}
                    your food. Advance everyday.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Foodpanda is a popular food delivery platform that operates in many cities worldwide.
                </p>
            </div>
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                    <div className="relative w-full h-48">
                        <img
                            src="https://i.ibb.co/NFxypNr/food-3.jpg"
                            className="object-cover w-full h-full rounded-t"
                            alt="Plan"
                        />
                    </div>
                    <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                        <div>
                            <div className="text-lg font-semibold">Special Pasta</div>
                            <p className="text-sm text-gray-900">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                doloremque.
                            </p>
                            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                                $12
                            </div>
                        </div>
                        <Link
                            to="/order"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-600 hover:bg-purple-500 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                    <div className="relative w-full h-48">
                        <img
                            src="https://i.ibb.co/MsvXTWt/food-5.jpg"
                            className="object-cover w-full h-full rounded-t"
                            alt="Plan"
                        />
                    </div>
                    <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                        <div>
                            <div className="text-lg font-semibold">Special Pasta</div>
                            <p className="text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack
                                never was so close.
                            </p>
                            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                                $38
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-600 hover:bg-purple-500 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                    <div className="relative w-full h-48">
                        <img
                            src="https://i.ibb.co/6JrtyY5/food-2.jpg"
                            className="object-cover w-full h-full rounded-t"
                            alt="Plan"
                        />
                    </div>
                    <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                        <div>
                            <div className="text-lg font-semibold">Couple Pizza</div>
                            <p className="text-sm text-gray-900">
                                We never had the chance to. Maybe it was the eleven months he
                                spent in the womb.
                            </p>
                            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                                $78
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-600 hover:bg-purple-500 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;