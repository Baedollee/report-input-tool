import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GetCodeMockDataThunk } from '../../redux/modules/codeDataSlice';

const CodeOutput = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.codeData.getCodeDataList);
  useEffect(() => {
    dispatch(GetCodeMockDataThunk());
  }, [JSON.stringify(data)]);

  // const data = [
  //   {
  //     codeOrder: 1,
  //     mainCode: '123',
  //     codeName: '123',
  //     StatColumn: '123',
  //     StatValue: '123',
  //   },
  //   {
  //     codeOrder: 2,
  //     mainCode: '234',
  //     codeName: '234',
  //     StatColumn: '234',
  //     StatValue: '234',
  //   },
  //   {
  //     codeOrder: 3,
  //     mainCode: '345',
  //     codeName: '345',
  //     StatColumn: '345',
  //     StatValue: '345',
  //   },
  //   {
  //     codeOrder: 4,
  //     mainCode: '',
  //     codeName: '',
  //     StatColumn: '',
  //     StatValue: '',
  //   },
  // ];

  return (
    <Wrap>
      {data.map((item, index) => (
        <ListBox key={`${item}_${index}`}>
          <ListDiv>{item.codeOrder}</ListDiv>
          <ListDiv>{item.mainCode}</ListDiv>
          <ListDiv>{item.codeName}</ListDiv>
          <ListDiv>{item.StatColumn}</ListDiv>
          <ListDiv>{item.StatValue}</ListDiv>
          <ListDiv>
            {/* <div>
              <button>수정</button>
              <button>삭제</button>
            </div> */}
            {item.createTime}
          </ListDiv>
          <ListDiv>
            <button>등록</button>
          </ListDiv>
        </ListBox>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  width: 80px;
  border: 1px solid black;
  background-color: white;
`;
export default CodeOutput;
