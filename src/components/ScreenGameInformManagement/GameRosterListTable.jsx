import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PlaySelectColumns } from 'static/BootStrapTableColumsContents';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  GetRosterDataThunk,
  onRosterSelect,
  ontableRosterSelect,
} from 'redux/modules/gameInformSlice';

const GameRosterListTable = ({ menuSelect, gameData }) => {
  const dispatch = useDispatch();
  const { rosterList, rosterSelectList, tableRosterSelectList } = useSelector(
    (state) => state?.gameInformSlice
  );
  console.log('게임 데이터');
  console.log(gameData);

  const homeAwayRosterList = () => {
    if (menuSelect === 'Home') {
      return rosterList.filter((i) => i.teamId === gameData[0]?.homeTeam);
    }
    if (menuSelect === 'Away') {
      return rosterList.filter((i) => i.teamId === gameData[0]?.awayTeam);
    }
  };

  const copyRosterArr = [...homeAwayRosterList()];
  const [selectList, setSelectList] = useState([]);
  const [subSelectList, setSubSelectList] = useState([...rosterSelectList]);
  const [rowIndex, setRowIndex] = useState(0);

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

  const columnStyle = (column, columnIndex) => {
    console.log(column, columnIndex);
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

  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];

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

  return (
    <>
      <Wrap>
        <div>팀선수명단</div>
        <BootstrapTable
          bootstrap4
          keyField='participantName'
          data={copyRosterArr}
          columns={PlaySelectColumns}
          selectRow={selectRow}
          defaultSorted={defaultSorted}
          //   cellEdit={cellEdit}
          bordered={true}
          hover
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

export default GameRosterListTable;
