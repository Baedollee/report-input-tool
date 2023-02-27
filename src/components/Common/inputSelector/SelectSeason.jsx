import React from 'react';
import Select from 'react-select';

const SelectSeason = ({ isClearable, setIsClearable }) => {
  const seasonOptions = [
    { value: 'season', label: '2022-2023' },
    { value: 'season', label: '2023-2024' },
  ];
  // const onChangeHandler = (e, isClearable) => {
  //   console.log(isClearable);
  //   if (isClearable.action === 'select-option') {
  //     const { value, label } = e;
  //     setTableDataInput({ ...tableDataInput, [value]: label });
  //   } else {
  //     console.log(isClearable.removedValues[0]);
  //     const { value, label } = isClearable.removedValues[0];
  //     setTableDataInput({
  //       ...tableDataInput,
  //       [value]: '',
  //     });
  //   }
  // };

  return (
    <>
      <Select
        options={seasonOptions}
        className='basic-single'
        classNamePrefix='select'
        isClearable={isClearable}
        isSearchable={false}
        placeholder='선택하세요'
        defaultValue={{ value: 'season', label: '2022-2023' }}
        // onChange={onChangeHandler}
        width='100'
        height='50'
      />
    </>
  );
};

export default SelectSeason;
