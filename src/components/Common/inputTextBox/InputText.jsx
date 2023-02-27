import React from 'react';
import styled from 'styled-components';

const InputText = ({ InputText, setInputText, name, value }) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputText({ ...InputText, [name]: value });
  };

  return (
    <>
      <InputStyled
        type='text'
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
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
