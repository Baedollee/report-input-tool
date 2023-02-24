import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import api from '../../shared/Api';

const initialState = {
  codeDataList: [],
  getCodeDataList: [],
};
export const PostCodeDataThunk = createAsyncThunk(
  'MockCodeDataThunk/post',
  async (payload, thunkApi) => {
    console.log('코드 포스트 post', payload);
    try {
      const response = await axios.post('/api/code/insertCode', payload);
      console.log('코드 리스폰스', response);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const GetCodeDataThunk = createAsyncThunk(
  'CodeDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('/api/code/selectActionCodeList');
      return thunkApi.fulfillWithValue(response.data.data);
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
    [PostCodeDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.codeDataList = [...action.payload, state.codeDataList];
    },
    [PostCodeDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetCodeDataThunk.fulfilled]: (state, action) => {
      state.codeDataList = action.payload;
    },
    [GetCodeDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const postCodeState = codeSlice.actions;
export default codeSlice.reducer;
