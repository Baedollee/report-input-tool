import React, { useCallback, useEffect, useState } from 'react';
import {
  GetRosterDataThunk,
  isSelect,
  onRosterSelect,
} from 'redux/modules/gameInformSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { columns } from 'static/BootStrapTableColumsContents';

const RosterListTable = ({ rosterList }) => {
  const dispatch = useDispatch();
  // const rowsData = useSelector((state) => state.gameInformSlice.rosterList);
  const rowsData = rosterList;
  const selectData = useSelector(
    (state) => state.gameInformSlice.rosterSelectList
  );
  const selectStatusStore = useSelector(
    (state) => state.gameInformSlice.isSelect
  );
  const [selectStatus, setSelectStatus] = useState(selectStatusStore);
  const [selectList, setSelectList] = useState(selectData);

  const products = rowsData;
  // .filter((state) => state.participation === 'N');

  const handleBtnClick = () => {
    if (!selectList.includes(2)) {
      setSelectList([...selectList, 2]);
    } else {
      setSelectList(selectList.filter((x) => x !== 2));
    }
  };

  const handleOnSelect = (row, isSelect, index, a) => {
    // console.log('행 선택 ', isSelect);
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

  const selectionRenderer = ({ mode, checked, disabled }) => {
    console.log('선택 콜백', disabled);
    // return !checked;
  };

  // useEffect(() => {
  //   handleOnSelect();
  // }, [handleOnSelect]);

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
  const columnStyle = (column, columnIndex) => {
    console.log(column, columnIndex);
  };

  useEffect(() => {
    dispatch(onRosterSelect(selectList));
  }, [selectList]);

  // useEffect(() => {
  //   dispatch(GetRosterDataThunk());
  // }, []);

  return (
    <>
      <LeftBoxDiv>
        <div>팀선수명단</div>
        <BootstrapTable
          bootstrap4
          keyField='participantName'
          data={products}
          columns={columns}
          selectRow={selectRow}
          defaultSorted={defaultSorted}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          bordered={true}
          hover
          // striped
          condensed
          columnStyle={columnStyle}
          rowStyle={rowStyle}
        />
      </LeftBoxDiv>
    </>
  );
};

const LeftBoxDiv = styled.div`
  width: 45%;
  flex-direction: column;
`;

export default RosterListTable;
