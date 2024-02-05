'use client'
import React from 'react'
import Navbar from '@/components/Navbar';
import { Client, Databases, ID, Query} from "appwrite";
import { useState } from "react";

export default function Page({ params }) {

    const [blog, setBlog] = useState()
    const client = new Client();
    const [blogs, setBlogs] = useState([])

    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c0864f8dfa09e3dbc4');

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    '65c08dbbc9fedae0b008',
    '65c0927bd6898f473d19',
    [
        Query.equal('slug', params.slug)
    ]
);

promise.then(function (response) {
    console.log(response);
    setBlog(response.documents[0])
}, function (error) {
    console.log(error);
});

    return (
        <>
        <Navbar />

        <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">{blog?.title}</h1>
        <div className="">
          {!blog && "Loading..."}
          <div className="text-sm font-bold italic">Author: {blog?.author}</div>
          <div className="shadow-xl p-10" dangerouslySetInnerHTML={{__html: blog?.content}}></div> 

            {/* {blog?.content} */}
          
        </div>
      </div>
    </div >

    </>

    );
  };