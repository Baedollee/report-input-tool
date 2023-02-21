import React from 'react';
import styled from 'styled-components';

const CodeSearchTable = () => {
  return (
    <Wrap>
      <div>
        <button>주 코드</button>
        <button>상세 코드</button>
      </div>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
`;
export default CodeSearchTable;
