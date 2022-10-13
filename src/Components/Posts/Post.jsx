import React from "react";
import { useSelector } from "react-redux";
import postStore from "../../zustand/postStore";

import "./post.css";

const Post = () => {
  //zustand
  const post = postStore((state) => state.posts);

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  return (
    <>
      <section className='post-container'>
        {post.slice(1).map((post, idx) => (
          <div className='posts' key={idx}>
            <p className='posts-title'>{post.title}</p>
            <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
              {tags[post.tag]}
            </p>
            <p className='posts-description'>{post.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Post;
