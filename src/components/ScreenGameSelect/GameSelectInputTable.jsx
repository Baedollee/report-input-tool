import React, { useState } from "react";
import styled from "styled-components";
import SelectDivision from "components/Common/inputSelector/SelectDivision";
import SelectGender from "components/Common/inputSelector/SelectGender";
import SelectSeason from "components/Common/inputSelector/SelectSeason";
import SelectTeam from "components/Common/inputSelector/SelectTeam";
import SelectDate from "components/Common/inputSelector/SelectDate";
import SelectMonth from "components/Common/inputSelector/SelectMonth";
import SelectDatePicker from "components/Common/inputSelector/SelectDatePicker";
import { useDispatch } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { GameDataThunk } from "redux/modules/gameInformSlice";

const GameSelectInputTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [startDate, setStartDate] = useState(new Date());
  const gameSelectValue = {};
  const [gameInput, setGameInput] = useState(gameSelectValue);
  // console.log('게임 데이터');
  // console.log(gameInput);
  const move = async () => {
    // navigate({
    //   pathname: '/RegistrationManagement',
    //   search: `?competitioncode=23-24V&gamedate=2023-02-02`,
    // });
    navigate(
      "/RegistrationManagement?competitioncode=22-23V&gamedate=2023-02-02"
    );

    // console.log('222222', location.search);
    // dispatch(GameDataThunk(`?competitioncode=23-24V&gamedate=2023-02-02`));
  };

  console.log(location);

  // const location = useLocation();
  // const gameData = location.state.id;
  // console.log(gameData);

  return (
    <Wrap>
      <Container>
        <TableBox>
          <table>
            <tbody>
              <tr>
                <SelectDivision data={gameInput} setData={setGameInput} />
                <SelectSeason data={gameInput} setData={setGameInput} />
                <th>경기일정</th>
                <td style={{ backgroundColor: "" }}>
                  <SelectMonth data={gameInput} setData={setGameInput} />
                </td>
                <td>
                  <SelectDate data={gameInput} setData={setGameInput} />
                </td>
                <td>
                  <SelectDatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </td>
                <td></td>
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
                <td></td>
                <td></td>
                <td
                  style={{
                    backgroundColor: "white",
                    border: "none",
                  }}>
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
