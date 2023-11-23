import React, { useState } from 'react'; //import framework react e use state
import './Doacoes.css'; //importa css para estilizar

const Doacoes = () => {
  const [formData, setFormData] = useState({  //estrutura dados do formulario
    nomeDoador: '',
    valorDoacao: '',
    formaPagamento: 'Cartão de Crédito',
    emailDoador: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário de doação:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //salva os dados
  };

  return (
    <div className="doacao-container"> {/* bloco do container */}
      <h2>Faça uma Doação</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nomeDoador">Nome do Doador:</label> {/* salva informação na variavel*/}
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
          <label htmlFor="valorDoacao">Valor da Doação (R$):</label> {/* salva informacao na variavel*/}
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
          <label htmlFor="formaPagamento">Forma de Pagamento:</label> {/* salva informacao na variavel*/}
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
          <label htmlFor="emailDoador">Email do Doador:</label> {/* salva informacao na variavel*/}
          <input
            type="email"
            id="emailDoador"
            name="emailDoador"
            value={formData.emailDoador}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar Doação</button> {/*envia doacao (demonstrativo) */}
      </form>
    </div>
  );
};

export default Doacoes;
