import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectDate = ({ isClearable, setIsClearable, data, setData }) => {
  const dateCnt = [];
  for (let i = 1; i < 31; i++) {
    let dateData = {};
    dateData.value = 'month';
    dateData.label = i + '일';
    dateCnt.push(dateData);
  }
  const dataOption = [...dateCnt];
  const onChangeHandler = (e, isClearable) => {
    console.log(isClearable);
    console.log(e);
    if (isClearable.action === 'select-option') {
      const { value, label } = e;
      setData({ ...data, [value]: label.replace('일', '') });
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
  width: 50%;
  height: 100%;
`;
export default SelectDate;
