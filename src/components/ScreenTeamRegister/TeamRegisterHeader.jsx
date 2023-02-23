import React, { useEffect } from 'react';
import styled from 'styled-components';

const TeamRegisterHeader = ({ setShowModal }) => {
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <TableHeader>
        <h3>팀 등록 관리</h3>
        <div>
          <button>일괄 등록</button>
          <button onClick={openModal}>개별 등록</button>
        </div>
      </TableHeader>
    </>
  );
};
const TableHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;

export default TeamRegisterHeader;
