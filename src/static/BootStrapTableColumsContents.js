export const columns = [
  {
    dataField: 'participantName',
    text: '선수명',
    editable: false,
    sort: true,
    headerStyle: (column, colIndex) => {
      if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
    },
  },
  {
    dataField: 'participantId',
    text: '선수번호',
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
    hidden: true,

    headerStyle: (column, colIndex) => {
      if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
    },
  },
  {
    dataField: 'participantBIB',
    text: '배번',
    editable: true,
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
    // hidden: true,
    headerStyle: (column, colIndex) => {
      if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
    },
  },
  {
    dataField: 'teamId',
    text: '팀고유번호',
    editable: false,
    sort: true,
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (column) return { width: 'auto', fontSize: 10, textAlign: 'center' };
    },
  },
  {
    dataField: 'teamName',
    text: '팀명',
    editable: false,
    sort: true,
    hidden: true,
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
    hidden: true,
  },
  {
    dataField: 'gameCode',
    text: '리그',
  },
  {
    dataField: 'gender',
    text: '성별',
  },
  { dataField: 'roundSeq', text: '라운드' },
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
    hidden: true,
  },
  {
    dataField: 'gameLocation',
    text: '경기장',
    // hidden: true,
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

export const mainCodeColumn = [
  {
    dataField: 'num',
    text: '#',
    headerAlign: 'center',
  },
  {
    dataField: 'section',
    text: '주 코드',
    headerAlign: 'center',
  },
  {
    dataField: 'code',
    text: '코드 이름',
    headerAlign: 'center',
  },
  {
    dataField: 'fine',
    text: '수정 삭제',
    headerAlign: 'center',
  },
];

export const teamManagementColumn = [
  {
    dataField: 'num',
    text: '#',
    headerAlign: 'center',
  },
  {
    dataField: 'seperate',
    text: '구분',
    headerAlign: 'center',
  },
  {
    dataField: 'season',
    text: '시즌',
    headerAlign: 'center',
  },
  {
    dataField: 'teamName',
    text: '팀명',
    headerAlign: 'center',
  },
  {
    dataField: 'x',
    text: '',
    headerAlign: 'center',
  },
  {
    dataField: 'teamCode',
    text: '팀코드',
    headerAlign: 'center',
  },
  {
    dataField: 'gender',
    text: '성별',
    headerAlign: 'center',
  },
  {
    dataField: 'home',
    text: '홈구장',
    headerAlign: 'center',
  },
  {
    dataField: 'y',
    text: '연고지',
    headerAlign: 'center',
  },
  {
    dataField: 'delete',
    text: '수정/삭제',
    headerAlign: 'center',
  },
];

export const playerManagementColumn = [
  {
    dataField: 'num',
    text: '#',
    headerAlign: 'center',
  },
  {
    dataField: 'name',
    text: '이름',
    headerAlign: 'center',
  },
  {
    dataField: 'gender',
    text: '성별',
    headerAlign: 'center',
  },
  {
    dataField: 'teamName',
    text: '소속팀',
    headerAlign: 'center',
  },
  {
    dataField: 'position',
    text: '포지션',
    headerAlign: 'center',
  },
  {
    dataField: 'backNum',
    text: '배번',
    headerAlign: 'center',
  },
  {
    dataField: 'sin',
    text: '신분',
    headerAlign: 'center',
  },
  {
    dataField: 'birth',
    text: '생년월일',
    headerAlign: 'center',
  },
  {
    dataField: 'x',
    text: '',
    headerAlign: 'center',
  },
  {
    dataField: 'y',
    text: '',
    headerAlign: 'center',
  },
  {
    dataField: 'national',
    text: '국적',
    headerAlign: 'center',
  },
  {
    dataField: 'delete',
    text: '수정/삭제',
    headerAlign: 'center',
  },
];

export const refereeManagementColumn = [
  {
    dataField: 'num',
    text: '#',
    headerAlign: 'center',
  },
  {
    dataField: 'name',
    text: '이름',
    headerAlign: 'center',
  },
  {
    dataField: 'gender',
    text: '성별',
    headerAlign: 'center',
  },
  {
    dataField: 'teamName',
    text: '소속',
    headerAlign: 'center',
  },
  {
    dataField: 'position',
    text: '보직구분',
    headerAlign: 'center',
  },
  {
    dataField: 'birth',
    text: '생년월일',
    headerAlign: 'center',
  },
  {
    dataField: 'x',
    text: '주 부심 출장경기',
    headerAlign: 'center',
  },
  {
    dataField: 'y',
    text: '출전 기록심판 출장경기',
    headerAlign: 'center',
  },
  {
    dataField: 'delete',
    text: '수정/삭제',
    headerAlign: 'center',
  },
];
