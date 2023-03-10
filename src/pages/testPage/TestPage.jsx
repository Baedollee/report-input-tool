import React, { useCallback, useEffect, useState } from 'react';
import HandleImageCompression from './handleImageCompression/HandleImageCompression';
import { TestView } from './testCheckBox/TestCheckBox';
import TestUseEffect from './testUseEffect/TestUseEffect';

const TestPage = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(`you clicked ${count} times`);
  // }, [count]);

  const incrementCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    incrementCount();
  }, [incrementCount]);

  const loadJson = () => {
    return fetch('www.naver.com').then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
  };
  // loadJson('no-such-user.json').catch(alert);

  return (
    <div>
      {/* <p>you cliked {count} times</p>
      <button onClick={incrementCount}> Click</button>
      <button onClick={loadJson}>async click</button>
      <HandleImageCompression /> */}
      {/* <TestUseEffect /> */}
      <TestView />
    </div>
  );
};

export default TestPage;
