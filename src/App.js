import { BrowserRouter, Route } from "react-router-dom";
import LPage from "./Component/LPage";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={LPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
