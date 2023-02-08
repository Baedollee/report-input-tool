import React, { useEffect } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  DataGridPro,
  GridColumns,
  GridRowsProp,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from '@mui/x-data-grid-pro';
import { entrySlice } from 'redux/modules/EntrySlice';
import { useSelector } from 'react-redux';
import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export const MuiTable = () => {
  const data = useSelector((state) => state.entrySlice.entryList);

  console.log(data);
  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        checkboxSelection
        //     initialState={{
        //       pinnedColumns: {
        //         left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
        //         right: ['actions'],
        //       },
        //     }
        // }
      />
    </div>
  );
};

const columns = [
  {
    field: 'participantId',
    headerName: '참가자고유번호',
    width: 100,
    editable: false,
  },

  { field: 'createdTime', headerName: '시간', width: 20, editable: true },
  { field: 'participantBIB', headerName: '등번호', width: 60, editable: true },
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
  //   {
  //     field: 'actions',
  //     type: 'actions',
  //     width: 100,
  //     getActions: () => [
  //       <GridActionsCellItem icon={<EditIcon />} label='Edit' />,
  //       <GridActionsCellItem icon={<DeleteIcon />} label='Delete' />,
  //     ],
  //   },
];

const rows = [
  {
    id: 1,
    // name: randomTraderName(),
    participantId: 'AAAAA',
    createdTime: 'null',
    email: randomEmail(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    email: randomEmail(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    email: randomEmail(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    email: randomEmail(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    email: randomEmail(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
