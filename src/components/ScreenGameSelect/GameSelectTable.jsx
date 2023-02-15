import { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GameSelectTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const options = [
  //   {value:}
  // ]

  return (
    <Wrap>
      <h1>경기선택</h1>
      <table>
        {/* <thead></thead> */}
        <tbody>
          <tr>
            <th>리그</th>
            <td></td>
          </tr>
          <tr>
            <th>시즌</th>
            <td>
              <select>
                <option>2022-2023</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>경기일자</th>
            <td>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>성별</th>
            <td>선택</td>
          </tr>
          <tr>
            <th>공란</th>
            <td>공란</td>
          </tr>
          <tr>
            <th>공란</th>
            <td>공란</td>
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
