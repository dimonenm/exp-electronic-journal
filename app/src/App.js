import Container from './containers/Container';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Btn from './components/Btn';
import Gallery from './containers/Gallery';
import Card from './components/Card';
import Modal from './components/Modal';
import { useState } from 'react';


function App() {
  const [modal, setModal] = useState({ type: null })
  let cardArr = []
  for (let i = 0; i < 100; i++) {
    cardArr.push(<Card
      key={i}
      number={i}
      type="Почерк"
      numberOfMaterial="у.д. №1200000000000"
      dateOfIncoming="поступил 00.00.2022"
      dateOfComplite="окончание 00.00.2022"
      executor="Р.Н. Халилов" result="результативная" />)
  }
  return (
    <div className="App">

      <Container>
        <Header>Электронный журнал 0.0.1</Header>
        <Main>
          <Menu>
            <Btn type="create" setModal={setModal} modal={modal}></Btn>
            <Btn type="search" setModal={setModal} modal={modal}></Btn>
          </Menu>
          <Modal type={modal.type === 'create' ? 'create' : modal.type === 'search' ? 'search' : 'hidden'}></Modal>
          <Gallery>
            {cardArr}
          </Gallery>
          <Modal type={modal.type === 'info' ? 'info' : 'hidden'}></Modal>
          <Menu>
            <Btn type="info" setModal={setModal} modal={modal}>info</Btn>
          </Menu>
        </Main>
      </Container>

    </div>
  );
}

export default App;
