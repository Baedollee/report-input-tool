import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  teamDataList: [],
  postTeamData: [],
};

export const GetTeamListDataThunk = createAsyncThunk(
  'TeamListDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('');
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const PostTeamDataThunk = createAsyncThunk(
  'TeamDataThunk/post',
  async (payload, thunkApi) => {
    try {
      const response = await axios.post(''.payload);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const teamRegisterSlice = createSlice({
  name: 'TeamRegister',
  initialState,
  reducers: {},
  extraReducers: {
    [GetTeamListDataThunk.fulfillWithValue]: (state, action) => {
      state.teamDataList = action.payload;
    },
    [GetTeamListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [PostTeamDataThunk.fulfillWithValue]: (state, action) => {
      state.teamDataList = action.payload;
    },
    [PostTeamDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

// export const {} = teamRegisterSlice.action;
export default teamRegisterSlice.reducer;
