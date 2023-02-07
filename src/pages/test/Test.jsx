import React, { useCallback, useEffect, useState } from 'react';
import HandleImageCompression from './handleImageCompression/HandleImageCompression';

const Test = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(`you clicked ${count} times`);
  // }, [count]);

  const incrementCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    incrementCount();

    console.log('useEffect', count);
  }, [incrementCount]);

  console.log(count);
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
      <p>you cliked {count} times</p>
      <button onClick={incrementCount}> Click</button>
      <button onClick={loadJson}>async click</button>
      <HandleImageCompression />
    </div>
  );
};

export default Test;
