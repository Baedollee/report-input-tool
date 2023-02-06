import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../shared/Api';

const initialState = {
  dataList: [],
};
export const MockDataThunk = createAsyncThunk(
  'MockDataThunk/post',
  async (payload, thunkApi) => {
    console.log('', payload);
    try {
      const response = await axios.post('/api/startlist/insertLineup', payload);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: {
    [MockDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.dataList = [action.payload, ...state.dataList];
    },
    [MockDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const playerAction = playerSlice.actions;
export default playerSlice.reducer;
