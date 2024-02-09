import { CharacterProvider } from "./contexts/CharacterContext.jsx";
import List from "./components/List.jsx";

function App() {
  return (
    <CharacterProvider>
      <>
        <List />
      </>
    </CharacterProvider>
  );
}

export default App;
