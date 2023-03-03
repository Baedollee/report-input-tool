import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectDivision = ({ isClearable, setIsClearable, data, setData }) => {
  const divisionOptions = [
    { value: 'division', label: '프로배구' },
    { value: 'division', label: '아마추어' },
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

  const selectStyle = {
    control: (baseStyles, state) =>
      // console.log('baseStyles', baseStyles),
      // console.log('state', state),
      ({
        ...baseStyles,
        borderColor: state.isFocused ? 'grey' : 'red',
        // backgroundColor: 'yellow',
        // height: '100%',
      }),
  };

  return (
    <>
      <th>
        대회명
        <td>
          <StyledSelect
            options={divisionOptions}
            className='basic-single'
            classNamePrefix='select'
            isClearable={isClearable}
            isSearchable={false}
            placeholder='선택하세요'
            onChange={onChangeHandler}
            styles={selectStyle}
            width='100'
            height='50'
          />
        </td>
      </th>
    </>
  );
};

const StyledSelect = styled(Select)`
  width: 100%;
  height: 100%;
`;
export default SelectDivision;
