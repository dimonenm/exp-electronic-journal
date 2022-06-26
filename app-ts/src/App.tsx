import React, { useState } from 'react';
import './App.scss'
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Button from './components/Button';
import { IModal } from './types/types';

const App = () => {

  const [modal, setModal] = useState<IModal>({type: null})

  function createClickHendler() {
    if (modal.type !== 'create') {
      setModal((prev) => ({
        ...prev, type: 'create'
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null
      }))
    }
  }
  function searchClickHendler() {
    if (modal.type !== 'search') {
      setModal((prev) => ({
        ...prev, type: 'search'
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null
      }))
    }
  }
  function infoClickHendler() {
    if (modal.type !== 'info') {
      setModal((prev) => ({
        ...prev, type: 'info'
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null
      }))
    }
  }

  return (
    <Container>
      <Header>Электронный журнал 0.0.1</Header>
      <Main>
        <Menu type='left'>
          <Button type='create' clickHendler={createClickHendler} />
          <Button type='search' clickHendler={searchClickHendler} />
        </Menu>
        <Modal type={modal.type === 'create' ? 'create' : modal.type === 'search' ? 'search' : 'hidden'} />
        main
        <Modal type={modal.type === 'info' ? 'info' : 'hidden'} />
        <Menu type='right'>
          <Button type='info' clickHendler={infoClickHendler} />
        </Menu>
      </Main>
    </Container>
  );
};

export default App;
