import create from "zustand";
import { persist } from "zustand/middleware";
let store = (set) => ({
  posts: [
    {
      title: "",
      description: "",
      tag: 0,
    },
  ],
  createPost: (createPost) =>
    set((state) => ({
      posts: [...state.posts, createPost],
    })),
});
store = persist(store, { name: "posts_reddit" });
const postStore = create(store);
export default postStore;
