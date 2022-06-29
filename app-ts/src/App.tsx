import React, { useState } from 'react';
import './App.scss'
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Button from './components/Button';
import { IModal } from './types/types';
import Gallery from './containers/Gallery';
import Card from './components/Card';

const App = () => {

  let arr = [];
  for (let i = 0; i < 150; i++){
    let num = `№ ${i+1}`
    arr.push(<Card
      key={num}
      number={num} 
      type='Почерк-я'
      numberOfMaterial='у.д. №1200000000000'
      dateOfIncoming='поступил 00.00.2022'
      dateOfComplite='окончание 00.00.2022'
      executor='Арзяков Д.Н.'
      result='Результативная'
    />)
  }
  arr.reverse()

  const [modal, setModal] = useState<IModal>({ type: null })

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
        <Gallery>
          {arr}
        </Gallery>
        <Modal type={modal.type === 'info' ? 'info' : 'hidden'} />
        <Menu type='right'>
          <Button type='info' clickHendler={infoClickHendler} />
        </Menu>
      </Main>
    </Container>
  );
};

export default App;
