import React from 'react';
import { useDispatch } from 'react-redux';

export const OnCodeSubmitHandler = async (e) => {
  const codePostData = useSelector((state) => state.codeData.codeDataList);
  const dispatch = useDispatch();

  console.log('123213213213', codePostData);
  e.preventDefault();
  dispatch(MockCodeDataThunk(codePostData));
};
