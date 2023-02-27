import { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DefaultContents from './ReportInputData';

const GameSelectTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isClearable, setIsClearable] = useState(true);

  const dataValue = {
    leagueName: '',
    season: '',
    teamName: '',
    gender: '',
    date: '',
  };

  const [tableDataInput, setTableDataInput] = useState(dataValue);

  const leagueName = [
    { value: 'leagueName', label: 'v-리그' },
    { value: 'leagueName', label: 'j-리그' },
  ];

  const season = [{ value: '22-23', label: '2022-2023' }];
  const gender = [
    { value: 'gender', label: '남자' },
    { value: 'gender', label: '여자' },
  ];
  const teamName = [{ value: 'teamName', label: 'KAL' }];

  const onChangeHandler = (e, isClearable) => {
    console.log(isClearable);
    if (isClearable.action === 'select-option') {
      const { value, label } = e;
      setTableDataInput({ ...tableDataInput, [value]: label });
    } else {
      console.log(isClearable.removedValues[0]);
      const { value, label } = isClearable.removedValues[0];
      setTableDataInput({
        ...tableDataInput,
        [value]: '',
      });
    }
  };

  return (
    <Wrap>
      <table>
        {/* <thead></thead> */}
        <tbody>
          <tr>
            <th>리그</th>
            <td>
              <Select
                options={leagueName}
                className='basic-single'
                classNamePrefix='select'
                isClearable={isClearable}
                isSearchable={false}
                placeholder='선택하세요'
                onChange={onChangeHandler}
                width='100'
                height='50'
              />
            </td>
          </tr>
          <tr>
            <th>시즌</th>
            <td>
              <Select
                options={season}
                className='basic-single'
                classNamePrefix='select'
                isClearable={isClearable}
                placeholder='선택하세요'
                isSearchable={false}
                onChange={onChangeHandler}
                width='100'
                height='50'
              />
              {/* <select>
                <option>2022-2023</option>
              </select> */}
            </td>
          </tr>
          <tr>
            <th>경기일자</th>
            <td>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setTableDataInput({ ...tableDataInput, date: startDate });
                }}
                dateFormat='MM월 dd일'
                locale={ko}
              />
            </td>
            <td>
              <button onClick={() => setIsClearable(false)}>불러오기</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>성별</th>
            <td>
              <Select
                options={gender}
                className='basic-single'
                classNamePrefix='select'
                isClearable={isClearable}
                placeholder='선택하세요'
                isSearchable={false}
                onChange={onChangeHandler}
                width='100'
                height='50'
              />
            </td>
          </tr>
          <tr>
            <th>팀</th>
            <td>
              {/* <Select
                options={teamName}
                className='basic-single'
                classNamePrefix='select'
                isClearable={isClearable}
                placeholder='선택하세요'
                isSearchable={false}
                onChange={onChangeHandler}
                width='100'
                height='50'
              /> */}
              <input
                type='text'
                label='teamName'
                value={tableDataInput.teamName}
                onChange={onChangeHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  table {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    /* 표 테두리 간격 없애기 */
    border-collapse: collapse;

    /* thead {
      display: flex;
      flex-direction: row;
    } */
    tbody {
      display: flex;
      flex-direction: row;
      tr {
        display: flex;
        flex-direction: row;
        /* border: 1px solid black; */
      }
      th {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100px;
        height: 50px;
        border: 1px solid black;
      }
      td {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 140px;
        height: 50px;
        border: 1px solid black;
      }
    }
  }
`;

export default GameSelectTable;
