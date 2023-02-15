import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameDataSelectPage from 'pages/gameDataSelectPage/GameDataSelectPage';
import CodeReportPage from 'pages/codeReportPage/CodeReportPage';
import TestPage from 'pages/testPage/TestPage';
import BootstrapTableTest from 'pages/testPage/bootStrapTable/BootstrapTableTest';
import HitMapTestPage from 'pages/hitmapTestPage/HitMapTestPage';
import GameInformPage from 'pages/gameInformPage/GameInformPage';

function App() {
  return (
    <>
      {/* 초기 라인업 코드입력 페이지 */}
      <Routes>
        <Route path='/' element={<GameDataSelectPage />} />
        <Route path='/codeReport' element={<CodeReportPage />} />
        <Route path='/gameInfo' element={<GameInformPage />} />
      </Routes>
      {/* 공부페이지 */}
      {/* <TestPage /> */}
      {/* 히트맵 테스트 페이지 */}
      {/* <HitMapTestPage /> */}
      {/* 로그인 테스트 페이지 */}
      {/* <LoginPage /> */}
      {/* 관리자 테스트 페이지 */}
    </>
  );
}

export default App;
