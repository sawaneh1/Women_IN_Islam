import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "Sawaneh",
    phone: 3810745,
  },

  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

export const { updateUser } = UserSlice.actions;
export default UserSlice.reducer;
