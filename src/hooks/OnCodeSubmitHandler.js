import React from 'react';
import { useDispatch } from 'react-redux';
import { MockCodeDataThunk } from 'redux/modules/codeManagementDataSlice';

export const OnCodeSubmitHandler = async (e) => {
  const codePostData = useSelector((state) => state.codeData.codeDataList);
  const dispatch = useDispatch();

  e.preventDefault();
  dispatch(MockCodeDataThunk(codePostData));
};
