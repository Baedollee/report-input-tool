import React, { useCallback, useEffect, useState } from 'react';
import {
  GetRosterDataThunk,
  onRosterSelect,
  ontableRosterSelect,
  PostRosterDataThunk,
} from 'redux/modules/gameInformSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { columns } from 'static/BootStrapTableColumsContents';

const RosterListTable = ({ rosterList }) => {
  const dispatch = useDispatch();

  const { rosterSelectList, selectStatusStore, tableRosterSelectList, Select } =
    useSelector((state) => state?.gameInformSlice);

  const [selectList, setSelectList] = useState([]);
  const [subSelectList, setSubSelectList] = useState([...rosterSelectList]);

  const [rowIndex, setRowIndex] = useState(0);
  const copyRosterArr = [...rosterList];

  const handleOnSelect = (row, isSelect, a, b) => {
    if (isSelect) {
      setSelectList([...tableRosterSelectList, row.participantName]);
      setSubSelectList([...rosterSelectList, row]);
    } else {
      setSelectList(selectList.filter((x) => x !== row.participantName));
      setSubSelectList(
        subSelectList.filter((x) => x.participantName !== row.participantName)
      );
    }
  };

  const handleOnSelectAll = (isSelect, rows, c) => {
    const ids = rows.map((r) => r.participantName);
    const select = rows.map((i) => i);
    if (isSelect) {
      setSelectList(ids);
      setSubSelectList(select);
      return isSelect;
    } else {
      setSelectList([]);
      setSubSelectList([]);
    }
  };

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true,
    selected: [...tableRosterSelectList],
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

  const cellEdit = cellEditFactory({
    mode: 'dbclick',
    autoSelectText: true,
    blurToSave: true,
    onStartEdit: (row, column, rowIndex, columnIndex) => {
      setRowIndex(rowIndex);
    },
    beforeSaveCell: (oldValue, newValue, row, column) => {
      copyRosterArr[rowIndex] = {
        ...copyRosterArr[rowIndex],
        participantOrder: Number(newValue),
      };
    },
    afterSaveCell: (oldValue, newValue, row, column) => {
      console.log(newValue);
      dispatch(PostRosterDataThunk(copyRosterArr));
    },
  });

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
    dispatch(ontableRosterSelect(selectList));
  }, [selectList]);

  useEffect(() => {
    dispatch(onRosterSelect(subSelectList));
  }, [subSelectList]);

  const getRosterData = useCallback(() => {
    dispatch(GetRosterDataThunk());
  }, [JSON.stringify(copyRosterArr), dispatch]);

  useEffect(() => {
    getRosterData();
  }, []);

  const products = copyRosterArr;
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
          cellEdit={cellEdit}
          bordered={true}
          hover
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
