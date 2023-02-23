import React from 'react';
import styled from 'styled-components';

const TeamRegisterModal = ({ setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrap>
      <Header>
        <h3>팀 등록</h3>
        <button onClick={closeModal}>X</button>
      </Header>
      <Body>
        <table>
          <tbody>
            <tr>
              <th>팀로고</th>
              <td>등록</td>
              <th>팀명</th>
              <td>입력</td>
            </tr>
          </tbody>
        </table>
      </Body>
      <button onClick={closeModal}>창 닫기</button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 80%;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  z-index: 200;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  table {
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;
  }
`;

export default TeamRegisterModal;
