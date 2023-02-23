import React from 'react';
import Select from 'react-select';

const SelectPosition = ({ isClearable, setIsClearable }) => {
  const positionOptions = [
    { value: 'position', label: '공격' },
    { value: 'position', label: '수비' },
  ];

  //   const onChangeHandler = (e, isClearable) => {
  //     console.log(isClearable);
  //     if (isClearable.action === 'select-option') {
  //       const { value, label } = e;
  //       setTableDataInput({ ...tableDataInput, [value]: label });
  //     } else {
  //       console.log(isClearable.removedValues[0]);
  //       const { value, label } = isClearable.removedValues[0];
  //       setTableDataInput({
  //         ...tableDataInput,
  //         [value]: '',
  //       });
  //     }
  //   };
  return (
    <>
      <Select
        options={positionOptions}
        className='basic-single'
        classNamePrefix='select'
        isClearable={isClearable}
        isSearchable={false}
        placeholder='선택하세요'
        // onChange={onChangeHandler}
        width='100'
        height='50'
      />
    </>
  );
};

export default SelectPosition;
