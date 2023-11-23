import React, { useState } from 'react';
import './Matricula.css';

const Matricula = () => {
  const [formData, setFormData] = useState({
    nomeAluno: '',
    curso: 'Futebol', 
    endereco: '',
    nomePais: '',
    telefonePais: '',
    email: '',
  });


  const [matriculas, setMatriculas] = useState(() => {
    const storedMatriculas = localStorage.getItem('matriculas');
    return storedMatriculas ? JSON.parse(storedMatriculas) : [];
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const novaMatricula = { id: Date.now(), ...formData };
    setMatriculas([...matriculas, novaMatricula]);

    setFormData({
      nomeAluno: '',
      curso: '',
      endereco: '',
      nomePais: '',
      telefonePais: '',
      email: '',
    });

    updateBanco([...matriculas, novaMatricula]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const updateBanco = (data) => {
    localStorage.setItem('matriculas', JSON.stringify(data));
  };


  return (
    <div className="matricula-container"> {/*bloco da matricula*/}
      <h2>Faça sua Matrícula</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nomeAluno">Nome do Aluno:</label> {/*ações para salvar na variável */}
          <input
            type="text"
            id="nomeAluno"
            name="nomeAluno"
            value={formData.nomeAluno}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="curso">Curso Desejado:</label> {/*ações para salvar na variável */}
          <select
            id="curso"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            required
          >

            {/* opções de curso */}
            <option value="Futebol">Futebol</option>
            <option value="Ballet">Ballet</option>
            <option value="Jazz">Jazz</option>
            <option value="Karate">Karatê</option>
            <option value="Ingles">Inglês</option>
            <option value="Informática">Informática</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label> {/*ações para salvar na variável */}
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nomePais">Nome do Responsável:</label> {/*ações para salvar na variável */}
          <input
            type="text"
            id="nomePais"
            name="nomePais"
            value={formData.nomePais}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefonePais">Telefone do Responsável:</label> {/*ações para salvar na variável */}
          <input
            type="tel"
            id="telefonePais"
            name="telefonePais"
            value={formData.telefonePais}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label> {/*ações para salvar na variável */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar Matrícula</button>
      </form>
    </div>
  );
};

export default Matricula;