import { Elecciones } from './pages/Elecciones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CandidatosProvider } from './utils/CandidatosContext';
import { Navbar } from './components/NavBar';
import { Box } from '@mui/material';
import { RegistrarCandidato } from './pages/RegistrarCandidato';
import './_App.css';
function App() {
  return (
    <CandidatosProvider>
      <BrowserRouter>
        <Navbar />
        <Box
          sx={{
            margin: 2,
          }}
        >
          <Routes>
            <Route index element={<Elecciones />}></Route>
            <Route path="registrar" element={<RegistrarCandidato />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </CandidatosProvider>
  );
}

export default App;
