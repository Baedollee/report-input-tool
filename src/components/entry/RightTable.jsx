import React, { useCallback, useEffect, useState } from 'react';
import { GetEntryDataThunk, onEntrySelect } from 'redux/modules/EntrySlice';
import { useSelector, useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';

const RightTable = () => {
  const dispatch = useDispatch();
  const rowsData = useSelector((state) => state.entrySlice.entryList);
  const selectData = useSelector((state) => state.entrySlice.rightSelectList);
  const [selectList, setSelectList] = useState(selectData);

  const columns = [
    {
      dataField: 'participantId',
      text: '참가자고유번호',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column)
          return {
            width: 'auto',
            fontSize: 10,
            textAlign: 'center',
          };
      },
    },
    {
      dataField: 'createdTime',
      text: '시간',
      editable: true,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'participantBIB',
      text: '등번호',
      editable: true,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'participantName',
      text: '선수이름',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'participantPosition',
      text: '포지션',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'role',
      text: '역할',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'teamId',
      text: '팀고유번호',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'teamName',
      text: '팀명',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
    {
      dataField: 'participation',
      text: '참가여부',
      editable: false,
      sort: true,
      hidden: true,
      headerStyle: (column, colIndex) => {
        if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
      },
    },
  ];
  const products = rowsData.filter((state) => state.participation === 'N');
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
  //       selectList.filter((x) => x.participantName !== row.participantName)
  //     );
  //   }
  // });

  const handleOnSelect = (row, isSelect, index) => {
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
    dispatch(onEntrySelect(selectList));
  }, [selectList]);

  useEffect(() => {
    dispatch(GetEntryDataThunk());
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
