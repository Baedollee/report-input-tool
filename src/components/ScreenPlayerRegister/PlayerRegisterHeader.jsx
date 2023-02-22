import React from 'react';
import styled from 'styled-components';

const PlayerRegisterHeader = () => {
  return (
    <>
      <TableHeader>
        <h3>선수 관리</h3>
        <div>
          <button>일괄 등록</button>
          <button>개별 등록</button>
        </div>
      </TableHeader>
    </>
  );
};

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;
export default PlayerRegisterHeader;
