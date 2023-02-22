import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetCodeDataThunk } from 'redux/modules/codeManagementDataSlice';
import styled from 'styled-components';

const CodeSearchTable = ({ codeDataList }) => {
  const dispatch = useDispatch();

  const getCodeData = useCallback(() => {
    dispatch(GetCodeDataThunk());
  }, [dispatch]);

  useEffect(() => {
    getCodeData();
  }, []);

  return (
    <Wrap>
      <SelectBox>
        <button>주 코드</button>
        <button>상세 코드</button>
      </SelectBox>
      <TableBox>
        <table>
          <tbody>
            <tr>
              <th>코드이름</th>
              <td>입력</td>
              <th>코드이름</th>
              <td>입력</td>
              <th>코드이름</th>
              <td>입력</td>
            </tr>
            <tr>
              <th>주코드</th>
              <td>입력</td>
              <th>주코드</th>
              <td>입력</td>
              <td>
                <button>검색</button>
              </td>
            </tr>
          </tbody>
        </table>
      </TableBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  table {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;
    button {
      border: none;
      color: white;
      background-color: #13136b;
      width: 100px;
      :hover {
        font-weight: 700;
      }
    }

    th {
      background-color: gray;
      width: 100px;
      border: 1px solid black;
    }
    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    td {
      width: 200px;
    }
  }
`;
const TableBox = styled.div`
  display: flex;
`;
const SelectBox = styled.div`
  display: flex;
  button {
    border: 1px solid black;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: skyblue;
    :hover {
      font-weight: 700;
    }
  }
`;

export default CodeSearchTable;
