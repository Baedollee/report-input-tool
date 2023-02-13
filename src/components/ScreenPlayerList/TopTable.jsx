import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';

const TopTable = () => {
  const dispatch = useDispatch();
  const playData = useSelector((state) => state.entrySlice.playData);
  const products = playData;

  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
    },
    {
      dataField: 'name',
      text: 'Product Name',
    },
    {
      dataField: 'price',
      text: 'Product Price',
    },
  ];

  return (
    <>
      <BootstrapTable keyField='id' data={products} columns={columns} />;
    </>
  );
};

export default TopTable;
