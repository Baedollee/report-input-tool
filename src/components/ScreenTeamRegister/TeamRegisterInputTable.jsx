import React, { useState } from 'react';
import Select from 'react-select';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import SelectDivision from 'components/Common/inputSelector/SelectDivision';
import SelectSeason from 'components/Common/inputSelector/SelectSeason';
import SelectGender from 'components/Common/inputSelector/SelectGender';
import InputText from 'components/Common/inputTextBox/InputText';

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

  // console.log(tableDataInput);

  const monthCnt = [];
  for (let i = 1; i < 13; i++) {
    let monthData = {};
    monthData.value = 'month';
    monthData.label = i + '';
    monthCnt.push(monthData);
  }

  return (
    <Wrap>
      <Container>
        <TableBox>
          <table>
            <tbody>
              <tr>
                <th>구분</th>
                <td>
                  {/* <Select
                    options={monthCnt}
                    className='basic-single'
                    classNamePrefix='select'
                    isClearable={isClearable}
                    isSearchable={false}
                    placeholder='월'
                    onChange={onChangeHandler}
                    width='100'
                    height='50'
                  /> */}
                  <SelectDivision />
                </td>
                <th>시즌</th>
                <td>
                  <SelectSeason />
                </td>
                <th>성별</th>
                <td>
                  <SelectGender />
                </td>
                <th>감독</th>
                <td>
                  <InputText />
                </td>
              </tr>
              <tr>
                <th>팀명</th>
                <td>
                  <InputText />
                </td>
                <th>연고지</th>
                <td>
                  <InputText />
                </td>
                <th>홈구장</th>
                <td>
                  <InputText />
                </td>
                <th style={{ backgroundColor: 'white', border: 'none' }}></th>
                <td></td>
              </tr>
            </tbody>
          </table>
          <ButtonBox>
            <button>조회</button>
          </ButtonBox>
        </TableBox>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  padding: 5px;
  /* height: 100vh; */
  table {
    /* display: flex; */
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;

    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    th {
      text-align: center;
      background-color: gray;
      border: 1px solid black;
      min-width: 100px;
    }
    td {
      width: 310px;
      background-color: white;
    }
  }
`;
const Container = styled.div`
  display: flex;
`;

const TableBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-end;
  align-items: flex-end;
  button {
    width: 60px;
    height: 30px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;

export default TeamRegisterInputTable;
