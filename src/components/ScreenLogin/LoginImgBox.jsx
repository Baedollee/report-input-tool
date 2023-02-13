import React from 'react';
import styled from 'styled-components';

const LoginImgBox = () => {
  return (
    <>
      <Wrap>
        <ImgBox>
          <div>이미지 들어가는 자리</div>
        </ImgBox>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 1300px) {
    display: none;
    flex-direction: column;
  } */
`;
const ImgBox = styled.div`
  display: flex;
  width: 80%;
  height: 60%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export default LoginImgBox;
