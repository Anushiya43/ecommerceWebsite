import Marquee from './components/marquee/marquee';
import './App.css';
import Heading from './components/heading/heading';
import Catagory from './components/catagory/catagory';

function App() {
  return (
    <div className="App">
      <Marquee></Marquee>
      <Heading/>
      <Catagory/>
    </div>
  );
}

export default App;
