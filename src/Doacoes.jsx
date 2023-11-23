import React, { useState } from 'react';
import './Doacoes.css';

const Doacoes = () => {
  const [formData, setFormData] = useState({
    nomeDoador: '',
    valorDoacao: '',
    formaPagamento: 'Cartão de Crédito',
    emailDoador: '',
  });

  const [totalDoacoes, setTotalDoacoes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const valorDoacao = parseFloat(formData.valorDoacao);
    if (!isNaN(valorDoacao)) {
      console.log('Dados do formulário de doação:', formData);

      setTotalDoacoes((prevTotal) => prevTotal + valorDoacao);
      console.log('Valor Total de Doações:', totalDoacoes.toFixed(2));
    } else {
      console.log('Valor de doação inválido.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="doacao-container">
      <h2>Faça uma Doação</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nomeDoador">Nome do Doador:</label>
          <input
            type="text"
            id="nomeDoador"
            name="nomeDoador"
            value={formData.nomeDoador}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="valorDoacao">Valor da Doação (R$):</label>
          <input
            type="number"
            id="valorDoacao"
            name="valorDoacao"
            value={formData.valorDoacao}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formaPagamento">Forma de Pagamento:</label>
          <select
            id="formaPagamento"
            name="formaPagamento"
            value={formData.formaPagamento}
            onChange={handleChange}
            required
          >
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Boleto Bancário">Boleto Bancário</option>
            <option value="Transferência Bancária">Transferência Bancária</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="emailDoador">Email do Doador:</label>
          <input
            type="email"
            id="emailDoador"
            name="emailDoador"
            value={formData.emailDoador}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar Doação</button>
      </form>
    </div>
  );
};

export default Doacoes;
