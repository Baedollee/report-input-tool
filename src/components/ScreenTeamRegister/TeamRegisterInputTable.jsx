import React, { useState } from 'react';
import Select from 'react-select';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

const TeamRegisterInputTable = () => {
  const dataValue = {
    month: '',
    day: '',
    round: '',
    Stadium: '',
    homeTeam: '',
    awayTeam: '',
  };

  const [tableDataInput, setTableDataInput] = useState(dataValue);
  const [isClearable, setIsClearable] = useState(true);

  const onChangeHandler = (e, isClearable) => {
    if (isClearable.action === 'select-option') {
      const { value, label } = e;
      setTableDataInput({ ...tableDataInput, [value]: label });
    } else {
      const { value, label } = isClearable.removedValues[0];
      setTableDataInput({
        ...tableDataInput,
        [value]: '',
      });
    }
  };

  console.log(tableDataInput);

  const monthCnt = [];
  for (let i = 1; i < 13; i++) {
    let monthData = {};
    monthData.value = 'month';
    monthData.label = i + '';
    monthCnt.push(monthData);
  }

  return (
    <Wrap>
      <div>
        <h3>팀 등록 관리</h3>
      </div>
      <TableBox>
        <table>
          <tr>
            <th>경기일</th>
            <td>
              <Select
                options={monthCnt}
                className='basic-single'
                classNamePrefix='select'
                isClearable={isClearable}
                isSearchable={false}
                placeholder='월'
                onChange={onChangeHandler}
                width='100'
                height='50'
              />
              {/* <Select
                options={leagueName}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='선택하세요'
                // onChange={onChangeHandler}
                width='100'
                height='50'
              /> */}
            </td>
            <th>라운드</th>
            <td>숫자 선택</td>
            <th>성별</th>
            <td>성별선택</td>
            <th>경기장</th>
            <td>경기장 선택</td>
          </tr>
          <tr>
            <th>홈팀</th>
            <td>팀선택</td>
            <th>어웨이팀</th>
            <td>팀선택</td>
            <th>2222</th>
            <td></td>
          </tr>
        </table>
        <button>조회</button>
      </TableBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  table {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;

    th {
      background-color: gray;
      width: 100px;
      border: 1px solid black;
    }
    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }
`;
const TableBox = styled.div`
  display: flex;
`;
export default TeamRegisterInputTable;
