import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/reportInputPage/ReportInput';
import CodeReportPage from 'pages/codeReportPage/CodeReportPage';
import Test from 'pages/test/Test';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/codeReport' element={<CodeReportPage />} />
      </Routes> */}
      <Test />
    </>
  );
}

export default App;
