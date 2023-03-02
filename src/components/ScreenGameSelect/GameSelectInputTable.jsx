import React, { useState } from 'react';
import styled from 'styled-components';
import SelectDivision from 'components/Common/inputSelector/SelectDivision';
import SelectGender from 'components/Common/inputSelector/SelectGender';
import SelectSeason from 'components/Common/inputSelector/SelectSeason';
import SelectTeam from 'components/Common/inputSelector/SelectTeam';
import SelectDate from 'components/Common/inputSelector/SelectDate';
import SelectMonth from 'components/Common/inputSelector/SelectMonth';
import SelectDatePicker from 'components/Common/inputSelector/SelectDatePicker';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const GameSelectInputTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const gameSelectValue = {};
  const [gameInput, setGameInput] = useState(gameSelectValue);
  console.log('게임 데이터');
  console.log(gameInput);
  const move = () => {
    navigate('/RegistrationManagement', {
      state: {
        competitioncode: '22-23V',
        gamedate: '2023-02-02',
      },
    });
  };
  const location = useLocation();
  const gameData = location.state.id;
  console.log(gameData);

  return (
    <Wrap>
      <Container>
        <TableBox>
          <table>
            <tbody>
              <tr>
                <th>대회명</th>
                <td>
                  <SelectDivision data={gameInput} setData={setGameInput} />
                </td>
                <th>시즌</th>
                <td>
                  <SelectSeason data={gameInput} setData={setGameInput} />
                </td>
                <th>경기일정</th>
                <td
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                  }}>
                  <SelectMonth data={gameInput} setData={setGameInput} />
                  <SelectDate data={gameInput} setData={setGameInput} />
                </td>
                <td>
                  <SelectDatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </td>
              </tr>
              <tr>
                <th>성별</th>
                <td>
                  <SelectGender data={gameInput} setData={setGameInput} />
                </td>
                <th>홈팀</th>
                <td>
                  <SelectTeam data={gameInput} setData={setGameInput} />
                </td>
                <th>어웨이팀</th>
                <td>
                  <SelectTeam data={gameInput} setData={setGameInput} />
                </td>
                <td style={{ backgroundColor: 'white', border: 'none' }}>
                  <button onClick={move}>조회</button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <ButtonBox>
            <button>조회</button>
          </ButtonBox> */}
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
      background-color: white;
      width: 310px;
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

export default GameSelectInputTable;
