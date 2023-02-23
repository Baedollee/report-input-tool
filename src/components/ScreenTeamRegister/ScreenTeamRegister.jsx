import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TeamRegisterHeader from './TeamRegisterHeader';
import TeamRegisterInputTable from './TeamRegisterInputTable';
import TeamRegisterModal from './TeamRegisterModal';
import TeamRegisterShowTable from './TeamRegisterShowTable';

const ScreenTeamRegister = () => {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);

  // const handleClickOutside = ({ target }) => {
  //   console.log(target);
  //   if (showModal && !modalRef.current.contains(target))
  //     console.log('12312321');
  //   setShowModal(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside);
  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <Wrap>
      {showModal && <TeamRegisterModal setShowModal={setShowModal} />}
      <TeamRegisterHeader setShowModal={setShowModal} />
      <Container>
        <TeamRegisterInputTable />
        <TeamRegisterShowTable />
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  z-index: 50;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  height: 100%;
`;

export default ScreenTeamRegister;
