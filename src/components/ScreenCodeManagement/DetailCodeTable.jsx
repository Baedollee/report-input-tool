import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mainCodeColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

const DetailCodeTable = ({ codeDataList }) => {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <ButtonBox>
        <button>등록</button>
      </ButtonBox>
      <BootstrapTable
        bootstrap4
        keyField='codeOrder'
        data={codeDataList}
        columns={mainCodeColumn}
        pagination={paginationFactory()}
      />
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  height: 100%;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  button {
    background-color: #13136b;
    width: 100px;
    color: white;
    border: none;
  }
`;

export default DetailCodeTable;
