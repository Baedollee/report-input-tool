const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  menuName: 'gameSelect',
};

const MenuSelectSlice = createSlice({
  name: 'MenuSelect',
  initialState,
  reducers: {
    onChangeMenuName: (state, action) => {
      state.menuName = action.payload;
    },
  },
  extraReducers: {},
});

export const { onChangeMenuName } = MenuSelectSlice.actions;
export default MenuSelectSlice.reducer;
