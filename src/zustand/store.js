import create from "zustand";
import { persist } from "zustand/middleware";
let store = (set) => ({
  user: {
    name: "Vu hai Nguyen zustand",
    age: "21 zustand",
    about: "I am nguyen zustand",
    avaUrl: "https://i.redd.it/mozfkrjpoa261.png",
    themeColor: "#ff9051",
  },
  updateUser: (updatedUser) => set((state) => ({ user: updatedUser })),
});

store = persist(store, { name: "user_redit" });

const useStore = create(store);
export default useStore;
