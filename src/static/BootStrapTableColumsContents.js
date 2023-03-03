export const hederStyle = {
  headerStyle: () => {
    return { textAlign: 'center', backgroundColor: 'skyblue' };
  },
};

export const PlaySelectColumns = [
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
  {
    dataField: 'select',
    text: '경기선택',
    editable: false,
  },
];

export const mainCodeColumn = [
  {
    dataField: 'codeOrder',
    text: '#',
    headerStyle: () => {
      return { width: '30px', textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'mainCode',
    text: '주 코드',
    sort: true,
    headerStyle: () => {
      return {
        minWidth: '60px',
        width: '70px',
        textAlign: 'center',
        backgroundColor: 'skyblue',
      };
    },
  },
  {
    dataField: 'codeName',
    text: '코드 이름',
    sort: true,
    headerStyle: () => {
      return {
        width: '200px',
        minWidth: '150px',
        textAlign: 'center',
        backgroundColor: 'skyblue',
      };
    },
  },
  {
    dataField: 'statColumn',
    text: '수정 삭제',
    sort: true,
    headerStyle: () => {
      return {
        width: '100px',
        minWidth: '80px',
        textAlign: 'center',
        backgroundColor: 'skyblue',
      };
    },
  },
];

export const teamManagementColumn = [
  {
    dataField: 'gameNum',
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
    dataField: 'gameNum',
    text: '#',
    headerAlign: 'center',
  },
  {
    dataField: 'participantName',
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
    dataField: 'role',
    text: '포지션',
    headerAlign: 'center',
  },
  {
    dataField: 'participantBIB',
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
    dataField: 'gameNum',
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

export const PlaySelectColumn = [
  {
    dataField: 'competitionCode',
    text: '시즌',
    // hidden: true,
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'competitionName',
    text: '리그',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'gender',
    text: '성별',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'roundSeq',
    text: '라운드',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'homeTeam',
    text: 'Home',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'awayTeam',
    text: 'Away',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'gameCode',
    text: '경기고유번호',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'gameTime',
    text: '경기시작',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'gameLocation',
    text: '경기장',
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
    // hidden: true,
  },
  {
    dataField: 'inputStatus',
    text: '기록 입력 상태',
    editable: false,
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'gameInformSetting',
    text: '경기정보 설정',
    editable: false,
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
  {
    dataField: 'select',
    text: '경기선택',
    editable: false,
    headerStyle: () => {
      return { textAlign: 'center', backgroundColor: 'skyblue' };
    },
  },
];

export const editFollow = (cell, row, rowIndex, formatExtraData) => {
  return (
    <>
      <button>수정</button>
      <button>삭제</button>
    </>
  );
};
