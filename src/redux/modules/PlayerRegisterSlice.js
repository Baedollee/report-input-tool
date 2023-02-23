import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  playerDataList: [],
  postPlayerData: [],
};

export const GetPlayerListDataThunk = createAsyncThunk(
  'PlayerListDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('');
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const PostPlayerRegisterDataThunk = createAsyncThunk(
  'playerRegisterDataThunk/post',
  async (payload, thunkApi) => {
    try {
      const response = await axios.post('', payload);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const PutPlayerRegisterDataThunk = createAsyncThunk(
  'playerRegisterDataThunk/put',
  async (payload, thunkApi) => {
    try {
      const response = await axios.put('', payload);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const DeletePlayerRegisterDataThunk = createAsyncThunk(
  'playerRegisterDataThunk/delete',
  async (payload, thunkApi) => {
    try {
      const response = await axios.delete('', payload);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const playerRegisterSlice = createSlice({
  name: 'PlayerRegister',
  initialState,
  reducers: {},
  extraReducers: {
    [GetPlayerListDataThunk.fulfilled]: (state, action) => {
      state.playerDataList = action.payload;
    },
    [GetPlayerListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [PostPlayerRegisterDataThunk.fulfillWithValue]: (state, action) => {
      state.postPlayerData = action.payload;
    },
    [PostPlayerRegisterDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

// export const {} = playerRegisterSlice.actions;

export default playerRegisterSlice.reducer;
