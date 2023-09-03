import './App.css';
import Header from './components/Header/Header';
import Main from './MainContent';
import Content from './Content';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <ScrollAnimation/>
      <Content id="about" />
      <Content id="pricing" />
      <Content id="contact" />
    </div>
  );
}

export default App;
