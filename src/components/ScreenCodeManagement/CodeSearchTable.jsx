import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetCodeDataThunk } from 'redux/modules/codeManagementDataSlice';
import styled from 'styled-components';

const CodeSearchTable = ({ codeDataList }) => {
  const dispatch = useDispatch();

  const [selectType, setSelectType] = useState('main');

  const getCodeData = useCallback(() => {
    dispatch(GetCodeDataThunk());
  }, [dispatch]);

  useEffect(() => {
    getCodeData();
  }, []);

  return (
    <Wrap>
      <SelectBox>
        <SelectButton
          onClick={() => setSelectType('main')}
          type={selectType}
          value={'main'}>
          주 코드
        </SelectButton>
        <SelectButton
          onClick={() => setSelectType('sub')}
          type={selectType}
          value={'sub'}>
          상세 코드
        </SelectButton>
      </SelectBox>
      <TableBox>
        <form>
          <table>
            <tbody>
              <tr>
                <th>코드이름</th>
                <td>
                  <InputStyle type='text' />
                </td>
                <th>코드이름</th>
                <td>
                  <InputStyle type='text' />
                </td>
                <th>코드이름</th>
                <td>
                  <InputStyle type='text' />
                </td>
              </tr>
              <tr>
                <th>주코드</th>
                <td>
                  <InputStyle type='text' />
                </td>
                <th>주코드</th>
                <td>
                  <InputStyle type='text' />
                </td>
                <th style={{ backgroundColor: 'white', border: 'none' }}></th>
                <td></td>
                <th style={{ backgroundColor: 'white', border: 'none' }}>
                  <button>검색</button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </TableBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  table {
    /* display: flex; */
    width: 100%;
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;
    button {
      border: 1px solid #13136b;
      color: white;
      background-color: #13136b;
      min-width: 100px;
      :hover {
        font-weight: 700;
      }
    }

    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    th {
      background-color: gray;
      min-width: 100px;
      border: 1px solid black;
      text-align: center;
    }
    td {
      width: 310px;
    }
  }
`;
const TableBox = styled.div`
  display: flex;
  form {
    display: flex;
    width: 100%;
  }
`;
const SelectBox = styled.div`
  display: flex;
`;
const SelectButton = styled.button`
  display: flex;
  border: 1px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${(props) =>
    props.type === props.value ? 'gray' : 'white'};

  :hover {
    display: flex;
    font-weight: 700;
  }
`;
const InputStyle = styled.input`
  display: flex;
  width: 100%;
  border: none;
`;

export default CodeSearchTable;
