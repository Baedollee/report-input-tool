import React from 'react';
import Select from 'react-select';

const SelectDivision = ({ isClearable, setIsClearable }) => {
  const divisionOptions = [
    { value: 'division', label: '프로배구' },
    { value: 'division', label: '아마추어' },
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
        options={divisionOptions}
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

export default SelectDivision;
