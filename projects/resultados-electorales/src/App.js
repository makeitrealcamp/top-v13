import { Elecciones } from './pages/Elecciones';
import { CandidatosProvider } from './utils/CandidatosContext';

function App() {
  return (
    <CandidatosProvider>
      <Elecciones />
    </CandidatosProvider>
  );
}

export default App;
