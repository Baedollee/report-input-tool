import React, { useEffect, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  DataGridPro,
  GridColumns,
  GridRowsProp,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  gridPinnedColumnsSelector,
  useGridApiRef,
} from '@mui/x-data-grid-pro';
import {
  entrySlice,
  GetEntryDataThunk,
  onSelect,
} from 'redux/modules/EntrySlice';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomEmail,
//   randomUpdatedDate,
// } from '@mui/x-data-grid-generator';
import styled from 'styled-components';

const LeftTable = () => {
  const columns = [
    {
      field: 'participantId',
      headerName: '참가자고유번호',
      width: 100,
      editable: false,
    },

    { field: 'createdTime', headerName: '시간', width: 20, editable: true },
    {
      field: 'participantBIB',
      headerName: '등번호',
      width: 60,
      editable: true,
    },
    {
      field: 'participantName',
      headerName: '선수이름',
      // type: 'number',
      width: 80,
      editable: false,
    },
    {
      field: 'participantPosition',
      headerName: '포지션',
      // type: 'date',
      width: 60,
      editable: false,
    },
    {
      field: 'role',
      headerName: '역할',
      // type: 'dateTime',
      width: 40,
      editable: false,
    },
    {
      field: 'teamId',
      headerName: '팀고유번호',
      // type: 'dateTime',
      width: 80,
      editable: false,
    },
    {
      field: 'teamName',
      headerName: '팀명',
      type: 'dateTime',
      width: 80,
      editable: false,
    },
  ];
  const dispatch = useDispatch();
  const rowsData = useSelector((state) => state.entrySlice.entryList);
  const selectData = useSelector((state) => state.entrySlice.selectList);
  const [selectRow, setSelectRow] = useState([]);

  const apiRef = useGridApiRef();

  useEffect(() => {
    dispatch(onSelect(selectRow));
  }, [selectRow]);

  //   useEffect(() => {
  //     dispatch(GetEntryDataThunk());
  //   }, [rowsData]);

  //   console.log(selectData);
  return (
    <>
      <LeftBoxDiv>
        <div>팀선수명단</div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGridPro
            apiRef={apiRef}
            rows={rowsData}
            columns={columns}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = rowsData.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectRow(selectedRows);
            }}
            initialState={{
              pinnedColumns: {
                left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
                right: ['actions'],
              },
            }}
          />
        </div>
      </LeftBoxDiv>
    </>
  );
};

const LeftBoxDiv = styled.div`
  width: 45%;
  flex-direction: column;
`;

export default LeftTable;
