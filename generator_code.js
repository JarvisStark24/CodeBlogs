"use client"
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c0864f8dfa09e3dbc4');

  const databases = new Databases(client);

  let a = [
    {
      "title": "Mastering React.js",
      "content": "<p>React.js is a powerful JavaScript library for building user interfaces. Dive into this guide to learn about components, state management, and React hooks, and take your web development skills to the next level.</p>",
      "slug": "mastering-reactjs",
      "views": 8000,
      "author": "Alex Developer",
      "is_published": true
    },
    {
      "title": "Discovering Python's Magic Methods",
      "content": "<p>Explore the fascinating world of Python's magic methods and their role in object-oriented programming. Uncover the secrets behind __init__, __str__, and more, and enhance your Python coding expertise.</p>",
      "slug": "python-magic-methods",
      "views": 6000,
      "author": "Emily Coder",
      "is_published": true
    },
    {
      "title": "Building Scalable APIs with Node.js",
      "content": "<p>Learn the art of designing and building scalable APIs using Node.js. This guide covers routing, middleware, authentication, and best practices for creating robust and efficient server-side applications.</p>",
      "slug": "nodejs-scalable-apis",
      "views": 7000,
      "author": "Chris Backend",
      "is_published": true
    },
    {
      "title": "The Art of Data Visualization with D3.js",
      "content": "<p>Dive into the world of data visualization with D3.js. This tutorial explores creating interactive and stunning visualizations, from basic charts to complex data-driven dashboards, using the power of D3.js.</p>",
      "slug": "data-visualization-d3js",
      "views": 9000,
      "author": "Sophia DataViz",
      "is_published": true
    },
    {
      "title": "Responsive Web Design Essentials",
      "content": "<p>Master the principles of responsive web design and create websites that adapt seamlessly to various devices. Explore media queries, flexible grids, and other techniques to ensure an optimal user experience.</p>",
      "slug": "responsive-web-design",
      "views": 7500,
      "author": "Ryan WebDesigner",
      "is_published": true
    },
    {
      "title": "Deep Dive into Machine Learning Algorithms",
      "content": "<p>Embark on a journey into the world of machine learning algorithms. From linear regression to deep neural networks, this guide provides a comprehensive overview of popular algorithms and their applications.</p>",
      "slug": "machine-learning-algorithms",
      "views": 8500,
      "author": "Olivia ML",
      "is_published": true
    },
    {
      "title": "Securing Your Web Applications with OAuth 2.0",
      "content": "<p>Ensure the security of your web applications by implementing OAuth 2.0 authentication. This tutorial covers the OAuth 2.0 flow, scopes, and best practices for securing your users' data.</p>",
      "slug": "oauth2-security",
      "views": 7200,
      "author": "Daniel Security",
      "is_published": true
    },
    {
      "title": "Swift Programming for iOS Development",
      "content": "<p>Explore the Swift programming language and its role in iOS app development. From basic syntax to advanced topics like Codable and SwiftUI, this guide is your gateway to creating feature-rich iOS applications.</p>",
      "slug": "swift-ios-development",
      "views": 6800,
      "author": "Isabella iOSDev",
      "is_published": true
    },
    {
      "title": "Optimizing SQL Queries for Performance",
      "content": "<p>Unlock the secrets of optimizing SQL queries for better database performance. Learn about indexes, query optimization techniques, and common pitfalls to enhance the efficiency of your database interactions.</p>",
      "slug": "sql-query-optimization",
      "views": 8200,
      "author": "Nathan Database",
      "is_published": true
    },
    {
      "title": "The Power of Flutter in Cross-Platform Development",
      "content": "<p>Discover the power of Flutter for building cross-platform mobile applications. Dive into widgets, state management, and the Flutter ecosystem to create beautiful and performant apps for iOS and Android.</p>",
      "slug": "flutter-cross-platform",
      "views": 7700,
      "author": "Mia FlutterDev",
      "is_published": true
    }
  ]
  
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    
    
    const promise = databases.createDocument(
      '65c08dbbc9fedae0b008',
      '65c0927bd6898f473d19',
      ID.unique(),
      element    
      );
      
      promise.then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
    }

  return (
    <>
      navbar here
      <div>app here</div>
    </>
  );
}
