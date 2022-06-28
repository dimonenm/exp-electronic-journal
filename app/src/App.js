import Container from './containers/Container';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Btn from './components/Btn';
import Gallery from './containers/Gallery';
import Card from './components/Card';
import Modal from './components/Modal';


function App() {
  let cardArr = []
  for (let i = 0; i < 100; i++){
    cardArr.push(<Card
      number="1"
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
            <Btn type="create"></Btn>
            <Btn type="search"></Btn>
          </Menu>
          <Modal>Modal</Modal>
          <Gallery>
            {cardArr}
          </Gallery>
          <Modal>Modal</Modal>
          <Menu>
            <Btn type="info"></Btn>
          </Menu>
        </Main>
      </Container>

    </div>
  );
}

export default App;
