import React, { useEffect } from "react";

import Article from "./Artical";

const HomeArtical = () => {
  const data = [
    {
      image: "https://s1.1zoom.me/big3/207/373785-svetik.jpg",
      category: "Category",
      slug: "AAAA",
      title: "AAAAA",
      adminName: "AAAA",
      createdAt: "",
      articleText: "AAAAAAAAAAAAAA",
    },
    {
      image: "https://s1.1zoom.me/big3/207/373785-svetik.jpg",
      category: "Category",
      slug: "AAAA",
      title: "AAAAA",
      adminName: "AAAA",
      createdAt: "",
      articleText: "AAAAAAAAAAAAAA",
    },
    {
      image: "https://s1.1zoom.me/big3/207/373785-svetik.jpg",
      category: "Category",
      slug: "AAAA",
      title: "AAAAA",
      adminName: "AAAA",
      createdAt: "",
      articleText: "AAAAAAAAAAAAAA",
    },
    {
      image: "https://s1.1zoom.me/big3/207/373785-svetik.jpg",
      category: "Category",
      slug: "AAAA",
      title: "AAAAA",
      adminName: "AAAA",
      createdAt: "",
      articleText: "AAAAAAAAAAAAAA",
    },
    {
      image: "https://s1.1zoom.me/big3/207/373785-svetik.jpg",
      category: "Category",
      slug: "AAAA",
      title: "AAAAA",
      adminName: "AAAA",
      createdAt: "",
      articleText: "AAAAAAAAAAAAAA",
    },
    {
      image: "https://s1.1zoom.me/big3/207/373785-svetik.jpg",
      category: "Category",
      slug: "AAAA",
      title: "AAAAA",
      adminName: "AAAA",
      createdAt: "",
      articleText: "AAAAAAAAAAAAAA",
    },
  ];

  return (
    <div className="home-articals">
      {data.map((art, index) => (
        <Article key={index} art={art} />
      ))}
    </div>
  );
};

export default HomeArtical;
