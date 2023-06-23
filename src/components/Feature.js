import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <Link href="/" aria-label="Article">
                        <img
                            src="https://i.ibb.co/brJwfDV/food-6.jpg"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </Link>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                            13 Jun 2023
                        </p>
                        <Link
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="text-2xl font-bold leading-5">Japanese Burger</p>
                        </Link>
                        <p className="mb-4 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>
                            </Link>
                            <Link
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </Link>
                        </div>
                        <Link to='/cart'>
                            <button type="button"
                                className="w-full py-2 font-bold border rounded border-gray-800
                             text-gray-800 hover:text-white hover:bg-violet-400 mt-5">
                                Add to Cart
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <Link href="/" aria-label="Article">
                        <img
                            src="https://i.ibb.co/yRp5hSB/food-4.jpg"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </Link>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                            4 Mar 2023
                        </p>
                        <Link
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="text-2xl font-bold leading-5">Indian Pasta</p>
                        </Link>
                        <p className="mb-4 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>
                            </Link>
                            <Link
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </Link>
                        </div>
                        <button type="button"
                            className="w-full py-2 font-bold border rounded border-gray-800
                             text-gray-800 hover:text-white hover:bg-violet-400 mt-5">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <Link href="/" aria-label="Article">
                        <img
                            src="https://i.ibb.co/fHkN1qr/food-1.jpg"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </Link>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                            28 Jan 2023
                        </p>
                        <Link
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="text-2xl font-bold leading-5">
                                Turkey Pizza
                            </p>
                        </Link>
                        <p className="mb-4 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>
                            </Link>
                            <Link
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </Link>
                        </div>
                        <button type="button"
                            className="w-full py-2 font-bold border rounded border-gray-800
                             text-gray-800 hover:text-white hover:bg-violet-400 mt-5">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;