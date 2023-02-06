import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../src/pages/reportInputPage/ReportInput';
import CodeReportPage from '../src/pages/codeReportPage/CodeReportPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/codeReport' element={<CodeReportPage />} />
      </Routes>
    </>
  );
}

export default App;
