import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
const SelectDatePicker = ({ startDate, setStartDate }) => {
  return (
    <>
      <DatePicker
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

export default SelectDatePicker;
