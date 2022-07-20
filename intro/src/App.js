import logo from './logo.svg';
import './App.css';
import DefaultFunction from './Components/DefaultFunction';
import DefaultClass from './Components/DefaultClass';

function App() {
  return (
    <div className="App">
      <DefaultFunction/>
      <DefaultFunction cardColor="Red"/>
      <h1>Our Default Class components</h1>
      <DefaultClass/>
      <DefaultClass cardWidth={200} cardHeight={150} cardColor={"Pink"}/>
    </div>
  );
}

export default App;
