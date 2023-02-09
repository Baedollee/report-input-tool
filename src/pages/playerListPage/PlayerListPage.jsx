import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const PlayerListPage = () => {
  const products = [
    { id: '1', name: 'item', price: '2000' },
    { id: '2', name: 'item', price: '2000' },
    { id: '3', name: 'item', price: '2000' },
  ];
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Product Name',
      editable: false,
      sort: true,
    },
    {
      dataField: 'price',
      text: 'Product Price',
      sort: true,
    },
  ];
  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];

  const [selectList, setSelectList] = useState([]);

  const handleBtnClick = () => {
    if (!selectList.includes(2)) {
      setSelectList([...selectList, 2]);
    } else {
      setSelectList(selectList.filter((x) => x !== 2));
    }
  };
  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelectList([...selectList, row]);
    } else {
      setSelectList(selectList.filter((x) => x.id !== row.id));
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

  console.log(selectList);
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true,
    bgColor: 'skyblue',
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
  };
  const cellEdit = {
    mode: 'click',
  };

  return (
    <>
      <div>
        <button onClick={handleBtnClick}>버튼 클릭</button>
      </div>
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={products}
        columns={columns}
        selectRow={selectRow}
        defaultSorted={defaultSorted}
        cellEdit={cellEditFactory({ mode: 'dbclick' })}
        striped
        hover
        condensed
      />
    </>
  );
};
export default PlayerListPage;
