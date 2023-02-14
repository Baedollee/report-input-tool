import React, { useCallback, useEffect, useState } from 'react';
import {
  GetRosterDataThunk,
  onRosterSelect,
} from 'redux/modules/gameInformSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { columns } from 'static/BootStrapTableColumsContents';

const RightTable = () => {
  const dispatch = useDispatch();
  const rowsData = useSelector((state) => state.gameInformSlice.rosterList);
  const selectData = useSelector(
    (state) => state.gameInformSlice.rosterSelectList
  );
  const selectStatus = useSelector((state) => state.gameInformSlice.isSelect);
  const [selectList, setSelectList] = useState(selectData);

  console.log('--------', rowsData);
  const products = rowsData;
  // .filter((state) => state.participation === 'N');
  const handleBtnClick = () => {
    if (!selectList.includes(2)) {
      setSelectList([...selectList, 2]);
    } else {
      setSelectList(selectList.filter((x) => x !== 2));
    }
  };
  // const handleOnSelect = useCallback((row, isSelect) => {
  //   if (isSelect) {
  //     setSelectList(([...selectList]) => [...selectList, row]);
  //   } else {
  //     setSelectList((selectList) =>
  //       selectList.filter((x) => x.participantOrder !== row.participantOrder)
  //     );
  //   }
  // });

  const handleOnSelect = (row, isSelect, index, a) => {
    console.log('12312321321', row);
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

  useEffect(() => {
    dispatch(GetRosterDataThunk());
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

export default RightTable;
