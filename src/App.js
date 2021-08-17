import "./App.css";
import Data from "./components/Data";
import DataFetchingTwo from "./components/DataFetchingTwo";
import RefHooks from "./components/RefHooks";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import HookTimer from "./components/HookTimer";

function App() {
  return (
    <div className="App">
      <DataFetchingTwo />
      <Data />
      <RefHooks />
      <DocTitleOne />
      <DocTitleTwo />
      <HookTimer />
    </div>
  );
}

export default App;
