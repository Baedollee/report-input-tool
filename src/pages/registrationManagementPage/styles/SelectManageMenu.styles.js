import styled, { css, keyframes } from 'styled-components';
import { EnumRegistrationManagementScreen } from 'types/EnumRegistrationManagementScreen';

const animation_Out = keyframes`
0%{
  /* opacity: 0; */
  transform: translateY(-100%);
}
100%{
  /* opacity: 1; */
  transform: translateY(0);
}
`;
const animation_In = keyframes`
  0%{
  /* opacity: 1; */
  transform: translateY(0);
}
100%{
  /* opacity: 0; */
  transform: translateY(-100%);
}
`;

export const SelectMenuBox = styled.div`
display: flex;
flex-direction: column;
background-color: skyblue;
margin-left: 5px;
min-width: 80px;
width: 100px;
/* div {
  display: flex;
  height: 50px;
  background-color: #0c0c64;
  width: 100%;
  color: white;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: orange;
  }
} */
`;
export const ButtonStyled = styled.button`
display: flex;
border: none;
justify-content: center;
align-items: center;
background-color: #0c0c64;
color: white;
font-weight: 700;
border-bottom: 1px solid white;
height: 50px;
width: 100%;
:hover {
  background-color: orange;
}
`;
export const SubBtnWrap = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
`;
export const SubBtnBox = styled.div`
position: relative;
${(props) =>
  props.isSelected !== EnumRegistrationManagementScreen.ScreenGameSelect && props.onSelect !== EnumRegistrationManagementScreen.ScreenGameInformManagement
    ? css`
        animation: ${animation_Out} 0.3s ease-in;
      `
    : css`
        animation: ${animation_In} 0.3s ease-in;
      `};
`;
export const SubBtn = styled.button`
display: flex;
border: none;
justify-content: center;
align-items: center;
background-color: gray;
font-weight: 700;
border-bottom: 1px solid white;
height: 50px;
width: 100%;
color: white;
:hover {
  background-color: orange;
}
`;
// export const LogOutBtnWrap = styled.div`
//   display: flex;
//   overflow: hidden;
// `;
export const LogOutBtnBox = styled.div`
display: flex;
width: 100%;
`;