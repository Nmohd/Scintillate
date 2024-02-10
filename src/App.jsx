import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CharacterProvider } from "./contexts/CharacterContext.jsx";
import List from "./components/List.jsx";
import Character from "./components/Character.jsx";

function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<List />} />
          <Route path="characterDetails/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  );
}

export default App;
