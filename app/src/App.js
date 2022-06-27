import Container from './containers/Container';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Btn from './components/Btn';


function App() {
  return (
    <div className="App">

      <Container>
        <Header>Электронный журнал 0.0.1</Header>
        <Main>
          <Menu>
            <Btn type="create"></Btn>
            <Btn type="search"></Btn>
          </Menu>
          <div>Modal</div>
          <div>Content</div>
          <div>grid</div>
          <Menu>
            <Btn type="info"></Btn>
          </Menu>
        </Main>
      </Container>

    </div>
  );
}

export default App;
