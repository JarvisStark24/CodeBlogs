import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, author, metaDesc, readMoreLink, slug }) => {
    return (
        <div className=" ms-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
            <p className="text-gray-700 mb-4">{metaDesc}</p>
            <p className="text-gray-600 mb-4 text-sm font-bold">Author: {author}</p>
            <a
              href={"/blogpost/" + slug}
              className="bg-purple-500 text-white px-4 py-2 rounded-md inline-block cursor-pointer"
             >
                Read More
            </a> 
        </div>
    );
};

export default BlogCard;