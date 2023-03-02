import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectSeason = ({ isClearable, setIsClearable, data, setData }) => {
  const seasonOptions = [
    { value: 'season', label: '22-23V' },
    { value: 'season', label: '2023-2024' },
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
        options={seasonOptions}
        className='basic-single'
        classNamePrefix='select'
        isClearable={isClearable}
        isSearchable={false}
        placeholder='선택하세요'
        defaultValue={{ value: 'season', label: '2022-2023' }}
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

export default SelectSeason;
