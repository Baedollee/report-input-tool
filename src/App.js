import React from 'react';
import GameInformPage from 'pages/gameInformPage/GameInformPage';
// import { Route, Routes } from 'react-router-dom';
// import Main from 'pages/ReportInputPage/ReportInput';
// import CodeReportPage from 'pages/CodeReportPage/CodeReportPage';
// import TestPage from 'pages/TestPage/TestPage';
// import BootstrapTableTest from 'pages/TestPage/bootStrapTable/BootstrapTableTest';
// import HitMapTestPage from 'pages/HitmapTestPage/HitMapTestPage';
// import LoginPage from 'pages/LoginPage/LoginPage';

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
      라인업 선수 클릭 이동 페이지
      <GameInformPage />
      {/* 히트맵 테스트 페이지 */}
      {/* <HitMapTestPage /> */}
      {/* 로그인 테스트 페이지 */}
      {/* <LoginPage /> */}
      {/* 관리자 테스트 페이지 */}
    </>
  );
}

export default App;
