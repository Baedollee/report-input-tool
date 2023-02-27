import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCodeDataThunk } from 'redux/modules/codeManagementDataSlice';
import styled from 'styled-components';
import CodeSearchTable from './CodeSearchTable';
import DetailCodeTable from './DetailCodeTable';
import MainCodeTable from './MainCodeTable';
import CodeHeader from './CodeHeader';

const ScreenCodeManagement = () => {
  const { codeDataList } = useSelector((state) => state.codeManagementSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCodeDataThunk());
  }, []);

  return (
    <Wrap>
      <CodeHeader />
      <Container>
        <CodeSearchTable codeDataList={codeDataList} />
        <TableContainer>
          <Left>
            <MainCodeTable codeDataList={codeDataList} />
          </Left>
          <Right>
            <DetailCodeTable codeDataList={codeDataList} />
          </Right>
        </TableContainer>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  padding: 5px;
  height: calc(100% - 40px);
`;

const TableContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;
const Left = styled.div`
  display: flex;
  width: 50%;
`;
const Right = styled.div`
  display: flex;
  width: 50%;
`;
export default ScreenCodeManagement;
