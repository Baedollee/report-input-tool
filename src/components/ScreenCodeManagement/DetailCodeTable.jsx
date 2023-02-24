import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mainCodeColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

const DetailCodeTable = ({ codeDataList }) => {
  const editDeleteBtn = (cell, row, rowIndex, formatExtraData) => {
    return (
      <EditButtonBox>
        <ButtonStyle>수정</ButtonStyle>
        <ButtonStyle>삭제</ButtonStyle>
      </EditButtonBox>
    );
  };
  const copyMainCodeColumn = [...mainCodeColumn];
  copyMainCodeColumn[3] = {
    ...copyMainCodeColumn[3],
    formatter: editDeleteBtn,
  };

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
const EditButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
const ButtonStyle = styled.button`
  display: flex;
  background-color: #13136b;
  color: white;
  border: none;
  width: 50px;
  justify-content: center;
`;

export default DetailCodeTable;
