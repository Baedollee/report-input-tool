import React from 'react';
import Select from 'react-select';

const SelectMonth = ({ isClearable, setIsClearable, data, setData }) => {
  const monthCnt = [];
  for (let i = 1; i < 31; i++) {
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
      <Select
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

export default SelectMonth;
