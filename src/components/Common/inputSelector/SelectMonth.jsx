import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectMonth = ({ isClearable, setIsClearable, data, setData }) => {
  const monthCnt = [];
  for (let i = 1; i < 13; i++) {
    let monthData = {};
    monthData.value = 'date';
    monthData.label = i + '월';
    monthCnt.push(monthData);
  }
  const dataOption = [...monthCnt];
  const onChangeHandler = (e, isClearable) => {
    console.log(isClearable);
    console.log(e);
    if (isClearable.action === 'select-option') {
      const { value, label } = e;
      setData({ ...data, [value]: label.replace('월', '') });
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
        options={dataOption}
        className='basic-single'
        classNamePrefix='select'
        isClearable={isClearable}
        isSearchable={false}
        placeholder='선택하세요'
        onChange={onChangeHandler}
        width='100'
        height='50'
      />
    </>
  );
};

const StyledSelect = styled(Select)`
  width: 100%;
  height: 100%;
`;

export default SelectMonth;
