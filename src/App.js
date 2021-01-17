import './App.css';
import HelloProps from './components/HelloProps/HelloProps';
import Counter from './components/Counter/Counter';
import CounterProps from './components/CounterProps/CounterProps';
import Gallery from './components/Gallery/Gallery';
import Tab from './components/Tab/Tab'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HelloProps textToShow="Hello World"></HelloProps>
      <Counter></Counter>
      <CounterProps defaultNumber={10}></CounterProps>
      <Gallery></Gallery>
      <Tab tabs={[
        {title: 'Tab1', content: 'Soy el contenido de un tab'},
        {title: 'Tab2', content: 'Soy el contenido de un tab'},
        {title: 'Tab3', content: 'Soy el contenido de un tab'}]}></Tab>
      </header>
    </div>
  );
}

export default App;
