import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestPage from 'pages/testPage/TestPage';
import BootstrapTableTest from 'pages/testPage/bootStrapTable/BootstrapTableTest';
import HitMapTestPage from 'pages/hitmapTestPage/HitMapTestPage';
import GameInformPage from 'pages/gameInformManagementPage/GameInformPage';
import LoginPage from 'pages/loginPage/LoginPage';
import GameSelectPage from 'pages/gameSelectPage/GameSelectPage';
import RegistrationManagementPage from 'pages/registrationManagementPage/RegistrationManagementPage';
import ScreenCode from 'components/ScreenCodeManagement/ScreenCodeManagement';

function App() {
  return (
    <>
      {/* 초기 라인업 코드입력 페이지 */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/CodeManagement' element={<ScreenCode />} />
        <Route path='/gameInfo' element={<GameInformPage />} />
        <Route path='/gameSelect' element={<GameSelectPage />} />
        <Route
          path='/RegistrationManagement'
          element={<RegistrationManagementPage />}
        />
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
