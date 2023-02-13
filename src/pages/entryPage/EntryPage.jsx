// import React from 'react';
// import LeftTable from 'components/entry/LeftTable';
// import { MuiTable } from 'components/entry/MuiTable';
// import RightTable from 'components/entry/RightTable';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   DeleteLineUpListDataThunk,
//   EntryDataThunk,
//   LineUpListDataThunk,
//   onReset,
// } from 'redux/modules/EntrySlice';
// import { DeleteEntryDataThunk } from '../../redux/modules/EntrySlice';

// const EntryPage = () => {
//   const dispatch = useDispatch();
//   const selectList = useSelector((state) => state.entrySlice.selectList);
//   console.log('page', selectList);

//   const onClickLinUpHandler = async () => {
//     await dispatch(LineUpListDataThunk(selectList));
//     await dispatch(DeleteEntryDataThunk(selectList));
//     await dispatch(onReset());
//   };
//   const onClickEntryHandler = async () => {
//     await dispatch(EntryDataThunk(selectList));
//     await dispatch(DeleteLineUpListDataThunk(selectList));
//     await dispatch(onReset());
//   };

//   return (
//     <WrapDiv>
//       <LeftTable />
//       <MiddleBoxDiv>
//         <button onClick={onClickEntryHandler}>왼쪽</button>
//         <button onClick={onClickLinUpHandler}>오른쪽</button>
//       </MiddleBoxDiv>
//       <RightTable />
//     </WrapDiv>
//   );
// };

// const WrapDiv = styled.div`
//   display: flex;
//   height: 100vh;
//   padding: 10px;
//   flex-direction: row;
// `;

// const MiddleBoxDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 10%;
// `;

// export default EntryPage;

//
