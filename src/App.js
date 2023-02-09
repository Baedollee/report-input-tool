import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/reportInputPage/ReportInput';
import CodeReportPage from 'pages/codeReportPage/CodeReportPage';
import TestPage from 'pages/testPage/TestPage';
import EntryPage from './pages/entryPage/EntryPage';
import PlayerListPage from 'pages/playerListPage/PlayerListPage';
import BootstrapTableTest from 'pages/testPage/bootStrapTable/BootstrapTableTest';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/codeReport' element={<CodeReportPage />} />
      </Routes> */}
      {/* <TestPage /> */}
      {/* <EntryPage /> */}
      {/* <PlayerListPage /> */}
      <BootstrapTableTest />
    </>
  );
}

export default App;
