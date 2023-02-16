import React, { useCallback, useEffect, useState } from 'react';
import {
  GetLineUpListDataThunk,
  onLineUpSelect,
} from 'redux/modules/gameInformSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { columns } from 'static/BootStrapTableColumsContents';
import axios from 'axios';

const LineUpListTable = ({ lineUpList }) => {
  const dispatch = useDispatch();
  const copyLineUpArr = [...lineUpList];
  const products = copyLineUpArr;
  const selectData = useSelector(
    (state) => state.gameInformSlice.lineUpSelectList
  );

  const [selectList, setSelectList] = useState(selectData);

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelectList([...selectList, row]);
    } else {
      setSelectList(
        selectList.filter((x) => x.participantName !== row.participantName)
      );
    }
  };

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map((r) => r);
    if (isSelect) {
      setSelectList(ids);
    } else {
      setSelectList([]);
    }
  };

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
    style: { backgroundColor: 'skyblue' },
    headerColumnStyle: { textAlign: 'center' },
  };
  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];
  const cellEdit = {
    mode: 'click',
  };
  const rowStyle = (row, rowIndex) => {
    // if (rowIndex)
    return {
      color: 'black',
      fontSize: 15,
      width: 'auto',
      borderStyle: 'solid',
      textAlign: 'center',
    };
  };
  const columnStyle = (column, columnIndex) => {};

  useEffect(() => {
    dispatch(onLineUpSelect(selectList));
    console.log('333333');
  }, [selectList]);

  const getLineUpData = useCallback(() => {
    dispatch(GetLineUpListDataThunk());
  }, [copyLineUpArr]);

  useEffect(() => {
    getLineUpData();
    console.log('2222');
  }, []);

  return (
    <>
      <RightBoxDiv>
        <div>출전선수</div>
        <BootstrapTable
          bootstrap4
          keyField='participantName'
          data={products}
          columns={columns}
          selectRow={selectRow}
          defaultSorted={defaultSorted}
          cellEdit={cellEditFactory({ mode: 'dbclick' })}
          bordered={true}
          hover
          // striped
          condensed
          columnStyle={columnStyle}
          rowStyle={rowStyle}
        />
      </RightBoxDiv>
    </>
  );
};

const RightBoxDiv = styled.div`
  width: 45%;
  flex-direction: column;
`;

export default LineUpListTable;
