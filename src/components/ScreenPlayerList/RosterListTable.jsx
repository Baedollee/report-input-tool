import React, { useCallback, useEffect, useState } from 'react';
import {
  GetRosterDataThunk,
  onRosterSelect,
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

  //  const homeAwayRosterList = () => {
  //    if (settingSelector === 'Home') {
  //      return rosterList.filter((i) => i.teamId === gameData?.homeTeam);
  //    } else {
  //      return rosterList.filter((i) => i.teamId === gameData?.awayTeam);
  //    }
  //  };

  const { rosterSelectList, selectStatusStore } = useSelector(
    (state) => state?.gameInformSlice
  );

  // const [selectStatus, setSelectStatus] = useState(selectStatusStore);
  const [selectList, setSelectList] = useState(rosterSelectList);
  // console.log('11111', selectList);

  const [rowIndex, setRowIndex] = useState(0);
  const copyRosterArr = [...rosterList];

  const products = copyRosterArr;
  // .filter((state) => state.participation === 'N');

  // const handleBtnClick = () => {
  //   if (!selectList.includes(2)) {
  //     setSelectList([...selectList, 2]);
  //   } else {
  //     setSelectList(selectList.filter((x) => x !== 2));
  //   }
  // };

  const handleOnSelect = (row, isSelect, index, a) => {
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

  // const selectionRenderer = ({ mode, checked, disabled }) => {
  //   console.log('선택 콜백', disabled);
  //   // return !checked;
  // };

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

  const cellEdit = cellEditFactory({
    mode: 'dbclick',
    autoSelectText: true,
    blurToSave: true,
    onStartEdit: (row, column, rowIndex, columnIndex) => {
      console.log('start to edit!!!');
      setRowIndex(rowIndex);
    },
    beforeSaveCell: (oldValue, newValue, row, column) => {
      console.log('Before Saving Cell!!');
      copyRosterArr[rowIndex] = {
        ...copyRosterArr[rowIndex],
        participantOrder: Number(newValue),
      };
    },
    afterSaveCell: (oldValue, newValue, row, column) => {
      console.log('After Saving Cell!!');
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

  // useEffect(() => {
  //   // dispatch(PostLineUpListDataThunk(selectList));
  //   dispatch(onRosterSelect(selectList));
  // }, [selectList, copyRosterArr]);

  const getRosterData = useCallback(() => {
    dispatch(GetRosterDataThunk());
  }, [JSON.stringify(copyRosterArr), dispatch]);

  useEffect(() => {
    getRosterData();
    console.log('12321312321');
  }, []);

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
