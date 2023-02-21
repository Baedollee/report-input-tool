import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CodeSearchTable from './CodeSearchTable';
import MainCodeTable from './MainCodeTable';
import DetailCodeTable from './DetailCodeTable';

const ScreenCodeManagement = () => {
  return (
    <Wrap>
      <h3>코드관리</h3>
      <CodeSearchTable />
      <div>
        <MainCodeTable />
        <DetailCodeTable />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export default ScreenCodeManagement;
