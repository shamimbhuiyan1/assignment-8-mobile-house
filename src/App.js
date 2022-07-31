import "./App.css";
import Header from "./Components/Header/Header";
import Qna from "./Components/Qna/Qna";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qna></Qna>
    </div>
  );
}

export default App;
