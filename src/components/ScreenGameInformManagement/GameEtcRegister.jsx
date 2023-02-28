import InputText from 'components/Common/inputTextBox/InputText';
import InputTime from 'components/Common/inputTimeBox/InputTime';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { onChangeMenuName } from 'redux/modules/MenuSelectSlice';
import styled from 'styled-components';

const GameEtcRegister = () => {
  const dispatch = useDispatch();
  const nowView = 'GameEtcRegister';
  const value = 'gameSelect';
  const etcPostData = {
    people: '',
  };
  const [etcInputText, setEtcInputText] = useState(etcPostData);

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(MockCodeDataThunk(codeInputText));
  // };

  const refree = [];
  for (let i = 0; i < 10; i++) {
    let refreeData = {};
    refreeData.value = 'refree';
    refreeData.label = i + '';
    refree.push(refreeData);
  }

  console.log(etcInputText);
  return (
    <Wrap>
      <table>
        <tbody>
          <tr>
            <th>경기 고유 번호</th>
            <td>고유 번호</td>
            <th>관중수</th>
            <td>
              <InputText
                InputText={etcInputText}
                setInputText={setEtcInputText}
                nowView={nowView}
                name='people'
                value={etcInputText.people}
              />
            </td>
            <th>경기장</th>
            <td>
              <InputText
                InputText={etcInputText}
                setInputText={setEtcInputText}
                nowView={nowView}
                name
                value
              />
            </td>
          </tr>
          <tr>
            <th>시작시간</th>
            <td>
              <InputTime />
            </td>
            <th>종료시간</th>
            <td>
              <InputTime />
            </td>
            <th>총시간</th>
            <td>시작 - 종료</td>
          </tr>
          <tr>
            <th>날씨</th>
            <td>
              <InputText
                InputText={etcInputText}
                setInputText={setEtcInputText}
                nowView={nowView}
                name
                value
              />
            </td>
            <th>경기위원</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>심판위원</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
          </tr>
          <tr>
            <th>판독위원</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>주심</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>부심</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
          </tr>
          <tr>
            <th>선심</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>경기기록</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>대기심</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
          </tr>
          <tr>
            <th>대시선심</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>기록원</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
            <th>전산기록</th>
            <td>
              <Select
                options={refree}
                className='basic-single'
                classNamePrefix='select'
                // isClearable={isClearable}
                isSearchable={false}
                placeholder='누규'
                // onChange={onChangeHandler}
                width='80px'
                height='50'
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Bottom>
        <button onClick={() => dispatch(onChangeMenuName(value))}>완료</button>
      </Bottom>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  table {
    height: 100%;
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;
    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    th {
      text-align: center;
      background-color: #bab6b6;
      border: 1px solid black;
      min-width: 100px;
      width: 100px;
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
  align-items: center;
  width: 100%;
  height: 50px;
  button {
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;
export default GameEtcRegister;
