import { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const GameSelectTable = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [isClearable, setIsClearable] = useState(true);
  const DateArr = String(startDate).split(' ');

  const leagueName = [{ value: '데이터', label: 'V-리그' }];
  const season = [{ value: '22-23', label: '2022-2023' }];
  const gender = [
    { value: '남', label: '남자' },
    { value: '여', label: '여자' },
  ];
  const teamName = [];

  return (
    <Wrap>
      <h1>경기선택</h1>
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
                placeholder='선택하세요'
                isSearchable={false}
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
                onChange={(date) => setStartDate(date)}
                dateFormat='MM월 dd일'
                locale={ko}
              />
            </td>
            <td>
              <button>불러오기</button>
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
                width='100'
                height='50'
              />
            </td>
          </tr>
          <tr>
            <th>팀</th>
            <td>
              <Select
                options={teamName}
                className='basic-single'
                classNamePrefix='select'
                isClearable={isClearable}
                placeholder='선택하세요'
                isSearchable={false}
                width='100'
                height='50'
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
    width: 100%;
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
