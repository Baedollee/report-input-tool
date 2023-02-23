import SelectDivision from 'components/Common/inputSelector/SelectDivision';
import SelectGender from 'components/Common/inputSelector/SelectGender';
import InputText from 'components/Common/inputTextBox/InputText';
import UploadImage from 'components/Common/uploadImageBox/UploadImage';
import React from 'react';
import styled from 'styled-components';

const TeamRegisterModal = ({ setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrap>
      <ModalBox>
        <Header>
          <h3>팀 등록</h3>
          <button onClick={closeModal}>X</button>
        </Header>
        <Body>
          <table>
            <tbody>
              <tr>
                <th>팀로고</th>
                <td>
                  <UploadImage />
                </td>
                <th>
                  <tr>
                    <th>팀명</th>
                  </tr>
                  <tr>
                    <th>팀명(공식)</th>
                  </tr>
                </th>
                <td>
                  <tr>
                    <td>
                      <InputText />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputText />
                    </td>
                  </tr>
                </td>
              </tr>

              <tr>
                <th>성별</th>
                <td>
                  <SelectGender />
                </td>
                <th>시즌</th>
                <td>일자 선택</td>
              </tr>

              <tr>
                <th>주소</th>
                <td>
                  <InputText />
                </td>
                <th>구분</th>
                <td>
                  <SelectDivision />
                </td>
              </tr>

              <tr>
                <th>연고지</th>
                <td>
                  <InputText />
                </td>
                <th>홈구장</th>
                <td>
                  <InputText />
                </td>
              </tr>

              <tr>
                <th>창단일</th>
                <td>날짜 선택</td>
                <th>구단주명</th>
                <td>
                  <InputText />
                </td>
              </tr>

              <tr>
                <th>단장명</th>
                <td>
                  <InputText />
                </td>
                <th>감독명</th>
                <td>
                  <InputText />
                </td>
              </tr>

              <tr>
                <th>홈페이지</th>
                <td>
                  <InputText />
                </td>
                <th>전화</th>
                <td>
                  <InputText />
                </td>
              </tr>

              <tr>
                <th>팀 코드</th>
                <td>a1000</td>
                <th>모기업</th>
                <td>
                  <InputText />
                </td>
              </tr>
            </tbody>
          </table>
        </Body>
        <Bottom>
          <button>등록</button>
          <button onClick={closeModal}>취소</button>
        </Bottom>
      </ModalBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* height: 60%; */
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  z-index: 200;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h3 {
    border-bottom: 1px solid black;
    width: 80%;
  }
  button {
    border: none;
    background-color: white;
  }
`;
const Body = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  table {
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;
    width: 90%;
    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    th {
      text-align: center;
      background-color: #bab6b6;
      border: 1px solid black;
      min-width: 100px;
    }
    td {
      background-color: white;
      width: 310px;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default TeamRegisterModal;
