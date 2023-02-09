import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/reportInputPage/ReportInput';
import CodeReportPage from 'pages/codeReportPage/CodeReportPage';
import TestPage from 'pages/testPage/TestPage';
import EntryPage from './pages/entryPage/EntryPage';
import PlayerListPage from 'pages/playerListPage/PlayerListPage';
import BootstrapTableTest from 'pages/testPage/bootStrapTable/BootstrapTableTest';
import HitMapTestPage from 'pages/hitmapTestPage/HitMapTestPage';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/codeReport' element={<CodeReportPage />} />
      </Routes> */}
      {/* <EntryPage /> */}

      {/* 공부페이지 */}
      {/* <TestPage /> */}

      {/* 라인업 선수 클릭 이동 페이지 */}
      {/* <PlayerListPage /> */}

      {/* 히트맵 테스트 페이지 */}
      <HitMapTestPage />
    </>
  );
}

export default App;
