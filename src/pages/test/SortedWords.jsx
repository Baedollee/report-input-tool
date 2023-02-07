import React from 'react';

const SortedWords = ({ words }) => {
  const sortWords = () => {
    console.log('sortWords');
    delay(500);
    return words.sort();
  };

  const sortedWords = sortWords();

  return (
    <>
      <h2>Sorted Words</h2>
      <ul>
        {sortedWords.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SortedWords;

const delay = (ms) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + ms) {}
};
