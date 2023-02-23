import React from 'react';
import styled from 'styled-components';

const InputText = () => {
  return (
    <>
      <InputStyled type='text' />
    </>
  );
};

const InputStyled = styled.input`
  display: flex;
  width: 100%;
  height: 30px;
  border: none;
`;
export default InputText;
