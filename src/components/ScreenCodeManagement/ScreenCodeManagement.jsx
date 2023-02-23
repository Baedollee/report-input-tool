import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CodeSearchTable from './CodeSearchTable';
import DetailCodeTable from './DetailCodeTable';
import MainCodeTable from './MainCodeTable';

const ScreenCodeManagement = () => {
  const { codeDataList } = useSelector((state) => state.codeManagementSlice);
  console.log(codeDataList);
  return (
    <Wrap>
      <h3>코드관리</h3>
      <Box>
        <Header>
          <CodeSearchTable codeDataList={codeDataList} />
        </Header>
        <TableContainer>
          <Left>
            <MainCodeTable codeDataList={codeDataList} />
          </Left>
          <Right>
            <DetailCodeTable codeDataList={codeDataList} />
          </Right>
        </TableContainer>
      </Box>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  padding: 5px;
`;
const TableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5px;
  margin-top: 20px;
`;
const Left = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;
const Right = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;
export default ScreenCodeManagement;
