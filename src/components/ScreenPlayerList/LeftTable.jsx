import React, { useEffect, useState } from 'react';
import { onRosterSelect, onSelect } from 'redux/modules/gameInformSlice';
import { useSelector, useDispatch } from 'react-redux';
import { GetLineUpListDataThunk } from '../../redux/modules/gameInformSlice';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { columns } from 'static/BootStrapTableColumsContents';

const LeftTable = () => {
  const dispatch = useDispatch();
  const rowsData = useSelector((state) => state.gameInformSlice.lineUpList);
  const selectData = useSelector(
    (state) => state.gameInformSlice.rosterSelectList
  );
  const [selectList, setSelectList] = useState(selectData);

  const products = rowsData;

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelectList([...selectList, row]);
    } else {
      setSelectList(
        selectList.filter((x) => x.participantOrder !== row.participantOrder)
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
  const columnStyle = (column, columnIndex) => {
    console.log(column, columnIndex);
  };
  // const beforeSaveCell = (oldValue, newValue, row, column, done) => {
  //   console.log('----', oldValue);
  //   setTimeout(() => {
  //     if (alert('변경하시겠습니까?')) {
  //       done(true);
  //     } else {
  //       done(false);
  //     }
  //   }, 0);
  //   return { async: true };
  // };

  useEffect(() => {
    dispatch(onRosterSelect(selectList));
  }, [selectList]);

  //   useEffect(() => {
  //     dispatch(GetLineUpListDataThunk());
  //   }, [rowsData]);

  return (
    <>
      <RightBoxDiv>
        <div>출전선수</div>
        <BootstrapTable
          bootstrap4
          keyField='participantOrder'
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
