import React, { useState } from 'react';
import Select from 'react-select';

const SelectGender = ({ isClearable, setIsClearable }) => {
  //   const [isClearable, setIsClearable] = useState(true);
  const genderOptions = [
    { value: 'gender', label: '남자' },
    { value: 'gender', label: '여자' },
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
        options={genderOptions}
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

export default SelectGender;
