import React from 'react';
import Select from 'react-select';
const SelectDate = ({ isClearable, setIsClearable, data, setData }) => {
  const dateCnt = [];
  for (let i = 1; i < 13; i++) {
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

export default SelectDate;
