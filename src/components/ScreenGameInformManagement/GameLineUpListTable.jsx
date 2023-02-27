import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlaySelectColumns } from 'static/BootStrapTableColumsContents';
import {
  GetLineUpListDataThunk,
  onLineUpSelect,
  ontableLineUpSelect,
} from 'redux/modules/gameInformSlice';

const GameLineUpListTable = ({ gameData, menuSelect }) => {
  const dispatch = useDispatch();
  const { lineUpList, lineUpSelectList, tableLineUpSelectList } = useSelector(
    (state) => state?.gameInformSlice
  );
  const homeAwayLineUpList = () => {
    if (menuSelect === 'Home') {
      return lineUpList.filter((i) => i.teamId === gameData[0]?.homeTeam);
    }
    if (menuSelect === 'Away') {
      return lineUpList.filter((i) => i.teamId === gameData[0]?.awayTeam);
    }
  };

  const copyLineUpArr = [...homeAwayLineUpList()];
  const [selectList, setSelectList] = useState([]);
  const [subSelectList, setSubSelectList] = useState([...lineUpSelectList]);

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelectList([...tableLineUpSelectList, row.participantName]);
      setSubSelectList([...lineUpSelectList, row]);
    } else {
      setSelectList(selectList.filter((x) => x !== row.participantName));
      setSubSelectList(
        subSelectList.filter((x) => x.participantName !== row.participantName)
      );
    }
  };

  const handleOnSelectAll = (isSelect, rows) => {
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
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
    selected: [...tableLineUpSelectList],
    style: { backgroundColor: 'skyblue' },
    headerColumnStyle: { textAlign: 'center' },
  };

  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];

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

  useEffect(() => {
    dispatch(ontableLineUpSelect(selectList));
  }, [selectList]);

  useEffect(() => {
    dispatch(onLineUpSelect(subSelectList));
  }, [subSelectList]);

  const getLineUpData = useCallback(() => {
    dispatch(GetLineUpListDataThunk());
  }, [lineUpList, dispatch]);

  useEffect(() => {
    getLineUpData();
  }, []);

  const columnStyle = (column, columnIndex) => {};

  return (
    <>
      <Wrap>
        <div>출전선수</div>
        <BootstrapTable
          bootstrap4
          keyField='participantName'
          data={copyLineUpArr}
          columns={PlaySelectColumns}
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
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 45%;
  flex-direction: column;
`;
export default GameLineUpListTable;
