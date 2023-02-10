export const columns = [
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
  {
    dataField: 'participantOrder',
    text: '키값',
    editable: false,
    sort: true,
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
    },
  },
];
