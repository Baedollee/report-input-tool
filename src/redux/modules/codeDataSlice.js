import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import api from '../../shared/Api';

const initialState = {
  codeDataList: [],
  getCodeDataList: [],
};
export const MockCodeDataThunk = createAsyncThunk(
  'MockCodeDataThunk/post',
  async (payload, thunkApi) => {
    console.log('post', payload);
    try {
      const response = await axios.post('/api/startlist/insertLineup', payload);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const GetCodeMockDataThunk = createAsyncThunk(
  'MockCodeDataThunk/get',
  async (payload, thunkApi) => {
    // console.log('get', payload);
    try {
      const response = await axios.post('/api/code/selectCodelist');
      console.log('서버 get data', response);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    postCodeState: (state, action) => {
      console.log('123123123', state, action);
      state.codeDataList = action.payload;
    },
  },
  extraReducers: {
    [MockCodeDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.codeDataList = [...action.payload, state.codeDataList];
    },
    [MockCodeDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetCodeMockDataThunk.fulfilled]: (state, action) => {
      state.getCodeDataList = action.payload;
    },
    [GetCodeMockDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const postCodeState = codeSlice.actions;
export default codeSlice.reducer;
