import { BrowserRouter } from "react-router-dom";
import MenuComponent from "./components/MenuComponent";
import Router from "./components/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ margin: "auto", width: "50%" }}>
        <MenuComponent />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
