import React from 'react';

const Navbar = () =>{
    return(
        <nav className="bg-purple-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Brand Logo */}
                <a href="/" className="text-white text-lg font-bold">
                CodeBlog &lt;&gt;
                </a>

                {/* Responsive menu button */}
                <button className="lg:hidden text-white focus:outline-none">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="hhtp://www.w3.org/2000.svg"
                       >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>    
                    </svg> 
                </button>

                {/* Responsive menu items */}
                <div className="hidden lg:flex space-x-4">
                    <a href="/" className="text-white">
                        Home
                    </a>
                    <a href="/about" className="text-white">
                        About
                    </a>
                    <a href="/Contact" className="text-white">
                        Contact
                    </a>
                   
                </div>

            </div>
        </nav>
    );
};

export default Navbar;