import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mainCodeColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';
import paginationFactory from 'react-bootstrap-table2-paginator';

const MainCodeTable = ({ codeDataList }) => {
  return (
    <Wrap>
      <ButtonBox>
        <button>등록</button>
      </ButtonBox>
      <TableText>
        <BootstrapTable
          bootstrap4
          keyField='codeOrder'
          data={codeDataList}
          columns={mainCodeColumn}
          // pagination={paginationFactory()}
        />
      </TableText>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  button {
    background-color: #13136b;
    color: white;
    border: none;
    width: 100px;
  }
`;
const TableText = styled.div`
  display: flex;
  overflow: auto;
  height: 500px;
`;

export default MainCodeTable;
