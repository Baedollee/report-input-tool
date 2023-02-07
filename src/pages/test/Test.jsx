import React, { useState } from 'react';
import SortedWords from './SortedWords';

const Test = () => {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');

  const handleClick = () => {
    setWords([...words, word]);
    setWord('');
  };

  return (
    <>
      <h1>React Hooks : useMemo</h1>
      <div>
        <SortedWords word={words} />
      </div>
      <input
        value={word}
        onChange={({ target: { value } }) => setWord(value)}
        placeholder='word'
      />
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Test;
