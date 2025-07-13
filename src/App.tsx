import Konklave from "@pages/Konklave";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import cardinals from "@assets/data.json";
import { getCardinals } from "@assets/data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/2025"
          element={<Konklave year={2025} cardinals={cardinals[2025]} />}
        />
        <Route
          path="/2013"
          element={<Konklave year={2013} cardinals={getCardinals("2013")} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
