import React from 'react';
import styled from 'styled-components';
import kim from '../../assets/image/a3d908591f679e2f5c9875e433c3a947_mp4.gif';

const LoginImgBox = () => {
  return (
    <>
      <Wrap>
        <ImgBox>
          <img src={kim} alt='' width={'100%'} height={'100%'} />
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
`;

export default LoginImgBox;
