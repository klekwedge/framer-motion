import "./App.css";
import Collapsible from "./components/Collapsible";
import Filter from './components/Filter';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <Collapsible title="Toggle content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Collapsible>
      <Filter data={data}/>
    </div>
  );
}

export default App;
