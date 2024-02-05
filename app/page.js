"use client"
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client();
  const [blogs, setBlogs] = useState([])

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c0864f8dfa09e3dbc4');

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    '65c08dbbc9fedae0b008',
    '65c0927bd6898f473d19',
    []
);

promise.then(function (response) {
    console.log(response);
    setBlogs(response.documents)
}, function (error) {
    console.log(error);
});

function truncateHtml(htmlString, maxLength = 100) {
  // Create a temporary element to parse the HTML string
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;

  // Extract text content from the temporary element
  const textContent = tempElement.textContent || tempElement.innerText

  // Check if the text content exceeds the max length
  if(textContent.length > maxLength) {
    // Trim the text content to the first maxLength characters
    const truncatedText = textContent.substring(0, maxLength);

    // Add "..." to the end of the truncated text
    const truncatedHtml = truncatedText + '...';

    return truncatedHtml;
  }

  // If the text cotent is within the maxLength, return the original HTML String
  return htmlString;
}

  return (
    <>
      <Navbar />

      <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">latest Blogs</h1>
        <div className="">
          {blogs.length == 0 && "Loading..."}
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} metaDesc = {truncateHtml(blog.content)} />
          ))}
        </div>
      </div>
    </div >
    </>
  );
}
