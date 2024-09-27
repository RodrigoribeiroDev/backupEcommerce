import React, { useState } from 'react';
import '../Style/Payament.css'
import { useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const location = useLocation();
  const totalFromCart = location.state?.total || '';
  //uso do location para buscar o valor do state
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    amount: totalFromCart,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do pagamento:', formData);
    alert('Pagamento enviado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <h2>Pagamento com Cartão de Crédito</h2>

      <label>Número do Cartão</label>
      <input
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        placeholder="0000 0000 0000 0000"
        required
  
      />

      <label>Nome no Cartão</label>
      <input
        type="text"
        name="cardName"
        value={formData.cardName}
        onChange={handleChange}
        placeholder="Nome completo"
        required
    
      />

      <div>
        <div>
          <label>Data de Expiração</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/AA"
            required
          />
        </div>

        <div>
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="000"
            required
          />
        </div>
      </div>

      <label>Valor</label>
      <input
        type="text"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="R$ 0,00"
        required
      />

      <button className='btnPay' type="submit">Finalizar compra</button>
    </form>
  );
};

export default PaymentForm;
