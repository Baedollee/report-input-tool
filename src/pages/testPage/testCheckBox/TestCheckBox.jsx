import React, { useState } from 'react';
import { TestCheckBox } from './Check';

export const TestView = () => {
  const [service, setService] = useState(false);
  const [marketing, setMarketing] = useState(false);
  return (
    <article>
      <header>
        <h3>체크박스</h3>
      </header>
      <TestCheckBox checked={service} onChange={setService}>
        (필수) 서비스 이용약관
      </TestCheckBox>
      <TestCheckBox checked={marketing} onChange={setMarketing}>
        (선택) 마켓팅 수신
      </TestCheckBox>
    </article>
  );
};
