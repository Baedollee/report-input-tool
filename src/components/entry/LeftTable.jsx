import React, { useEffect, useState } from 'react';
import { entrySlice, onSelect } from 'redux/modules/EntrySlice';
import { useSelector, useDispatch } from 'react-redux';
import { GetLineUpListDataThunk } from '../../redux/modules/EntrySlice';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeftTable = () => {
  const dispatch = useDispatch();
  const rowsData = useSelector((state) => state.entrySlice.lineUpList);
  const [selectList, setSelectList] = useState([]);

  const columns = [
    {
      dataField: 'participantId',
      text: '참가자고유번호',
      editable: false,
      sort: true,
      headerStyle: (column, colIndex) => {
        if (column)
          return {
            width: '100px',
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
  ];
  const products = rowsData;

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
    // console.log('1111', rows, isSelect);
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
  const columnStyle = (column, columnIndex) => {
    console.log(column, columnIndex);
  };

  useEffect(() => {
    dispatch(onSelect(selectList));
  }, [selectList]);

  //   useEffect(() => {
  //     dispatch(GetLineUpListDataThunk());
  //   }, [rowsData]);

  //   console.log(rowsData);
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

export default LeftTable;
