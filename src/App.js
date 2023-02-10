import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/reportInputPage/ReportInput';
import CodeReportPage from 'pages/codeReportPage/CodeReportPage';
import TestPage from 'pages/testPage/TestPage';
import PlayerListPage from 'pages/playerListPage/PlayerListPage';
import BootstrapTableTest from 'pages/testPage/bootStrapTable/BootstrapTableTest';
import HitMapTestPage from 'pages/hitmapTestPage/HitMapTestPage';

function App() {
  return (
    <>
      {/* 초기 라인업 코드입력 페이지 */}
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/codeReport' element={<CodeReportPage />} />
      </Routes> */}

      {/* 공부페이지 */}
      {/* <TestPage /> */}

      {/* 라인업 선수 클릭 이동 페이지
      <PlayerListPage /> */}

      {/* 히트맵 테스트 페이지 */}
      {/* <HitMapTestPage /> */}

      {/* 관리자 테스트 페이지 */}
    </>
  );
}

export default App;
