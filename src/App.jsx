import React from 'react'; //importa framework react
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //importa funções do router-dom para manipulação de páginas
import './App.css'; //importa css

//importa páginas
import Top from './Top';
import SobreNos from './SobreNos';
import Apresentacoes from './Apresentacoes';
import Matricula from './Matricula';
import Doacoes from './Doacoes';
import Consulta from './Consulta';

//fornece as rotas para as páginas
const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/apresentacoes" element={<Apresentacoes />} />
        <Route path="/matriculas" element={<Matricula />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </Router>
  );
};

export default App;