import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Vu hai Nguyen rd toolkit",
    age: "21",
    about: "I am nguyen",
    avaUrl: "https://i.redd.it/mozfkrjpoa261.png",
    themeColor: "#ff9051",
    pending: false,
    error: false,
  },

  reducers: {
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avaUrl = action.payload.avaUrl;
    //   state.themeColor = action.payload.themeColor;
    // },
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = true;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
