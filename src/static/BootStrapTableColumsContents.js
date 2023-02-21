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
    editable: false,
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
    text: '출전순서',
    // editable: true,
    sort: true,
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
    },
  },
];

export const gameDataColumn = [
  {
    dataField: 'competitionCode',
    text: '시즌',
  },
  {
    dataField: 'gameCode',
    text: '리그',
  },
  {
    dataField: 'gender',
    text: '성별',
  },
  {
    dataField: 'homeTeam',
    text: 'Home',
  },
  {
    dataField: 'awayTeam',
    text: 'Away',
  },
  {
    dataField: 'teamId',
    text: '경기고유번호',
  },
  {
    dataField: 'createdTime',
    text: '경기시작',
  },
  {
    dataField: 'gameNum',
    text: '게임순서',
  },
  // {
  //   dataField: 'teamId',
  //   text: '경기장',
  // },

  // {
  //   dataField: '',
  //   text: '기록 입력 상태',
  // },
  // {
  //   dataField: '',
  //   text: '경기정보 설정',
  // },
  // {
  //   dataField: '',
  //   text: '경기선택',
  // },
];
