import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoginInputBox = () => {
  const loginValue = {
    id: '',
    pw: '',
  };

  const [loginInputText, setLoginInputText] = useState(loginValue);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInputText({ ...loginInputText, [name]: value });
  };

  // const login = () => {
  //   if (loginInputText.id === '' || loginInputText.pw === '') {
  //     window.alert('아이디 비밀번호 입력해주세요!');
  //     return;
  //   }
  //   if (!emailCheck(loginInputText.id)) {
  //     window.alert('이메일 형식에 맞지 않습니다!');
  //   }
  // };

  const obSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrap>
        <InputWrap>
          <TitleBox>
            <p>배구 경기기록 입력기</p>
          </TitleBox>
          <BodyBox>
            <TextBox>
              <div>
                <p>* 아이디</p>
              </div>
              <div>
                <p>* 비밀번호</p>
              </div>
            </TextBox>
            <InputBox>
              <div>
                <input
                  type='text'
                  name='id'
                  value={loginInputText.id}
                  onChange={onChangeHandler}></input>
              </div>
              <div>
                <input
                  type='text'
                  name='pw'
                  value={loginInputText.pw}
                  onChange={onChangeHandler}></input>
              </div>
              <div>
                <button>아이디 찾기</button>
                <button>비밀번호 찾기</button>
              </div>
            </InputBox>
            <ButtonBox>
              <button onClick={obSubmitHandler}>로그인</button>
            </ButtonBox>
          </BodyBox>
          <FooterBox></FooterBox>
        </InputWrap>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  width: 55%;
  height: 100%;
  justify-content: start;
  align-items: center;
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
`;

const TitleBox = styled.div`
  display: flex;
  height: 40%;
  padding-left: 110px;
  justify-content: flex-start;
  align-items: flex-end;
  p {
    font-size: 40px;
    font-weight: 700;
  }
`;
const BodyBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 20%;
  p {
    font-size: 20px;
  }
`;
const InputBox = styled.div`
  display: flex;
  height: 100%;
  padding-top: 30px;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  div {
    display: flex;
    width: 100%;
    gap: 5px;
    input {
      display: flex;
      width: 100%;
      height: 40px;
    }
    button {
      border: none;
      background-color: #605f5f;
      color: white;
    }
  }
`;
const ButtonBox = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  padding-left: 10px;
  button {
    width: 60%;
    height: 60%;
    border: none;
    background-color: #605f5f;
    color: white;
  }
`;
const FooterBox = styled.div`
  display: flex;
  height: 25%;
`;

export default LoginInputBox;
