import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStore from "../../zustand/store";
import { updateUser } from "../../redux/apiCalls";

import Input from "../InpuFields/Input";
import "./edit.css";
const EditPage = ({ setEdit }) => {
  const avaUrl = [
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://preview.redd.it/j4clkwtw5jv51.png?auto=webp&s=0d46c1ad5667f147056f2696833bd385b5bbc1c0",
    "https://preview.redd.it/kdyz0culzmv51.png?auto=webp&s=fd0bf66450bc76151e21c19014fb329634c949a8",

    "https://preview.redd.it/mkemq6sqf7261.png?auto=webp&s=314cb48d9de13f542a9e39f54b9991e219c53d79",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968",
    "https://preview.redd.it/aca5u20iplv51.jpg?auto=webp&s=8c2e645d51165a51e4a1b1800348db070f6fac42",
    "https://preview.redd.it/j4clkwtw5jv51.png?auto=webp&s=0d46c1ad5667f147056f2696833bd385b5bbc1c0",
    "https://preview.redd.it/oiynpcmqqow61.png?auto=webp&s=231a94f63382c22994f899d7ca1f5ce2068e08a0",
  ];

  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  //zustand
  const user = useStore((state) => state.user);
  const updateUser = useStore((state) => state.updateUser);

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name,
      age,
      about,
      avaUrl: url,
      themeColor: theme,
    };
    // updateUser(updatedUser, dispatch);

    //zuztand
    updateUser(updatedUser);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className='edit-container'>
          <button className='close'>SAVE</button>
          <div className='edit-profile'>Edit Profile</div>
          <div className='input-container'>
            <Input label='Display name' data={user.name} setData={setName} />
            <Input label='Age' data={user.age} setData={setAge} />
            <Input
              inputType='textarea'
              classStyle='input-about'
              label='About'
              data={user.about}
              setData={setAbout}
            />

            <label>Profile Picture</label>
            <div className='input-image-container'>
              {avaUrl.map((url) => (
                <>
                  <img
                    src={url}
                    alt=''
                    className='input-image'
                    onClick={(e) => setUrl(e.target.src)}
                  />
                </>
              ))}
            </div>
            <div className='theme-container'>
              <label>Theme</label>
              <input
                type='color'
                className='theme-color'
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
