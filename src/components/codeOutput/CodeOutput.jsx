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
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
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
`;
const ListBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  width: 80px;
  border: 1px solid black;
`;
export default CodeOutput;
