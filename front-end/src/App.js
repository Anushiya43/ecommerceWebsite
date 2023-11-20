
import './App.css';
import Heading from './components/heading/heading';
import Catagory from './components/catagory/catagory';
import Banner from './components/banner/banner';
import Feature from './components/Feature/feature';
import Fooder from './components/fooder/fooder';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Catagory/>
      <Banner/>
      <Feature/>
      <Fooder/>
    </div>
  );
}

export default App;
