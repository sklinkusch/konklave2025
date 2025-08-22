import Konklave from "@pages/Konklave";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";
import Current from "@pages/Current";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/year/:year" element={<Konklave />} />
        <Route path="/current" element={<Current />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
