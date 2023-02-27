import React from 'react';
import styled from 'styled-components';

const codeHeader = () => {
  return (
    <>
      <TableHeader>
        <h3>경기 선택</h3>
      </TableHeader>
    </>
  );
};

const TableHeader = styled.div`
  display: flex;

  justify-content: space-between;
  /* button {
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #13136b;
  } */
`;

export default codeHeader;
