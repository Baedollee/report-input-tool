import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
const SelectDatePicker = ({ startDate, setStartDate }) => {
  return (
    <>
      <StyledDatePicker
        showIcon
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          // setTableDataInput({ ...tableDataInput, date: startDate });
        }}
        dateFormat='MM월 dd일'
        locale={ko}
      />
    </>
  );
};

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 100%;
`;
export default SelectDatePicker;
