'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../assets/logo.png';
import img2 from '../assets/embelem.png';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [modalContent, setModalContent] = useState('');
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (event, content) => {
        const rect = event.target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const top = rect.top + scrollTop;
        const left = rect.left + scrollLeft;
        setModalPosition({ top: top + rect.height, left });
        setModalContent(content);
        setHoveredButton(event.target.innerText);
        setShowModal(true);
    };
    

    const handleMouseLeave = () => {
        setShowModal(false);
    };

    return (
        <nav className="flex flex-col items-center p-2 max-w-[1200px] mx-auto relative">
            <div className="border-b-[28px] border-blue-500 w-full"></div>
            <div className="flex items-center w-full bg-white py-0.5 gap-[80px]">
                <Image src={img1} width={310} height={240} alt="Left Logo" />
                <span className="text-red-700 text-3xl font-bold mx-4">GDS Online Engagement</span>
                <Image src={img2} width={60} height={300} alt="Right Logo" />
            </div>
            <div className="border-b-[28px] border-blue-500 w-full"></div>
            <div className="flex justify-center items-center w-full gap-4">
                <Link href="/link1" legacyBehavior>
                    <a
                        className="border border-gray-300 px-9 py-1 text-blue-600 text-sm shadow-xl"
                        onMouseEnter={(event) => handleMouseEnter(event, 'Notification Content')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Notification
                    </a>
                </Link>
                <Link href="/link2" legacyBehavior>
                    <a
                        className="border border-gray-300 px-9 py-1 text-blue-600 text-sm shadow-xl"
                        onMouseEnter={(event) => handleMouseEnter(event, 'Stage 1.Registration Content')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Stage 1.Registration
                    </a>
                </Link>
                <Link href="/link3" legacyBehavior>
                    <a
                        className="border border-gray-300 px-9 py-1 text-blue-600 text-sm shadow-xl"
                        onMouseEnter={(event) => handleMouseEnter(event, 'Stage 2.Apply Online Content')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Stage 2.Apply Online
                    </a>
                </Link>
                <Link href="/link4" legacyBehavior>
                    <a
                        className="border border-gray-300 px-9 py-1 text-blue-600 text-sm shadow-xl"
                        onMouseEnter={(event) => handleMouseEnter(event, 'Fee Payment Content')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Fee Payment
                    </a>
                </Link>
                <Link href="/link5" legacyBehavior>
                    <a
                        className="border border-gray-300 px-9 py-1 text-blue-600 text-sm shadow-xl"
                        onMouseEnter={(event) => handleMouseEnter(event, 'Candidate Grievances Content')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Candidate Grievances
                    </a>
                </Link>
            </div>
            {showModal && (
                <div
                    className="absolute bg-white p-4 rounded shadow-lg"
                    style={{ top: modalPosition.top, left: modalPosition.left }}
                >
                    <div className="flex flex-col items-center">
                        <p>{modalContent}</p>
                        {hoveredButton === 'Notification' && (
                            <>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                                    Button 1
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Button 2
                                </button>
                            </>
                        )}
                        {hoveredButton === 'Stage 1.Registration' && (
                            <>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
                                    Button 3
                                </button>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Button 4
                                </button>
                            </>
                        )}
                        {hoveredButton === 'Stage 2.Apply Online' && (
                            <>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2">
                                    Button 5
                                </button>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Button 6
                                </button>
                            </>
                        )}
                        {hoveredButton === 'Fee Payment' && (
                            <>
                                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2">
                                    Button 7
                                </button>
                                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                    Button 8
                                </button>
                            </>
                        )}
                        {hoveredButton === 'Candidate Grievances' && (
                            <>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
                                    Button 9
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Button 10
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
