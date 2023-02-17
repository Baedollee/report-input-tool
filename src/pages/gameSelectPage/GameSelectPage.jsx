import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GameDataTable from 'components/Common/GameDataTable';
import GameSelectTable from 'components/ScreenGameSelect/GameSelectTable';
import { useState } from 'react';

const GameSelectPage = () => {
  const navigate = useNavigate();
  const [dropDownVisibility, setDropDownVisibility] = useState(false);

  return (
    <WrapDiv>
      <div>
        <button onClick={() => navigate('/codeReport')}>
          코드입력 페이지로 이동
        </button>
        <button onClick={() => navigate('/gameInfo')}>
          엔트리 선택 페이지 이동
        </button>
        <button onClick={() => navigate('/login')}>로그인 페이지 이동</button>
      </div>
      <GameSelectTable />
      <GameDataTable />
      {/* <DropDown /> */}
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GameSelectPage;
//
