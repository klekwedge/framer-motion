import "./App.css";
import { data } from "./data";
import Filter from "./components/Filter";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Filter data={data} />
    </div>
  );
}

export default App;
