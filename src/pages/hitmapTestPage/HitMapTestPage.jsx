import { useEffect, useState } from 'react';

const HitMapTestPage = () => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const onhMouseClickHandler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onhMouseClickHandler);

    return () => {
      window.removeEventListener('mousemove', onhMouseClickHandler);
    };
  }, []);

  console.log(mousePos);
  return (
    <div>
      마우스 위치
      <div></div>
    </div>
  );
};

export default HitMapTestPage;
