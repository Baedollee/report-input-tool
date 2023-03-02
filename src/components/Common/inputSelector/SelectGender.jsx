import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectGender = ({ isClearable, setIsClearable, data, setData }) => {
  //   const [isClearable, setIsClearable] = useState(true);
  const genderOptions = [
    { value: 'gender', label: '남자' },
    { value: 'gender', label: '여자' },
  ];

  const onChangeHandler = (e, isClearable) => {
    console.log(isClearable);
    console.log(e);
    if (isClearable.action === 'select-option') {
      const { value, label } = e;
      setData({ ...data, [value]: label });
    } else {
      console.log(isClearable.removedValues[0]);
      const { value, label } = isClearable.removedValues[0];
      setData({
        ...data,
        [value]: '',
      });
    }
  };
  return (
    <>
      <StyledSelect
        options={genderOptions}
        className='basic-single'
        classNamePrefix='select'
        isClearable={isClearable}
        isSearchable={false}
        placeholder='선택하세요'
        onChange={onChangeHandler}
      />
    </>
  );
};

const StyledSelect = styled(Select)`
  width: 100%;
  height: 100%;
`;
export default SelectGender;
