import "./App.css";
import data from "./assets/data.json";
import CharList from "./components/CharList";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Wubba lubba dub dub!</h2>

      <div className="container">
        <CharList data={data} />
      </div>
    </div>
  );
}

export default App;
