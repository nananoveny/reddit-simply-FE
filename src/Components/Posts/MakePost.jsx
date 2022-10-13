import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InpuFields/Input";
import { createPost } from "../../redux/postSlice";
import postStore from "../../zustand/postStore";

import "./post.css";
const MakePost = (props) => {
  const { setOpen } = props;

  const dispatch = useDispatch();

  const createPost = postStore((state) => state.createPost);

  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some sescriptions");
  const [selectedIdx, setSelectIdx] = useState(0);

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const handlePost = () => {
    setOpen(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx,
    };
    // dispatch(createPost(newPost));
    createPost(newPost);
  };
  return (
    <section className='makepost-container'>
      <div className='makepost-navigation'>
        <p className='makepost-save' onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType='textarea'
        setData={setTitle}
        label='Title'
        classStyle='makepost-title'
      />
      <Input
        data={desc}
        inputType='textarea'
        setData={setDesc}
        label='Descriptions'
        classStyle='makepost-desc '
      />
      <label>Tags</label>
      <div className='makepost-tags'>
        {tags.map((tag, idx) => (
          <button
            key={idx}
            className={`${
              selectedIdx === idx
                ? `makepost-tags-selected-${tag} posts-tags-${tag}`
                : `posts-tags-${tag}`
            }  `}
            onClick={() => setSelectIdx(idx)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MakePost;
