import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CharacterProvider } from "./contexts/CharacterContext.jsx";
import List from "./components/CharacterList.jsx";
import Character from "./components/Character.jsx";

function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<List />} />
          <Route path="characterDetails/:id/:liked" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  );
}

export default App;
