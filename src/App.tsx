import Konklave from "@pages/Konklave";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/year/:year" element={<Konklave />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
