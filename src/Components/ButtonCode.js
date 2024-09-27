import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import '../Style/Payament.css'
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Biblioteca para gerar UUIDs

const ButtonCode = () => {
  const location = useLocation();
  const [ codigo, setCodigo ] = useState('');
  const searchTotal = location.state?.total;

  useEffect(() => {
    if ( searchTotal ) {
      // Gera um código aleatório baseado no valor do QR code
      setCodigo(uuidv4());
    }
  }, [searchTotal]);

  return (
    <div>
      {searchTotal ? (
        <>
          <QRCode value={ searchTotal } /> <br /><br />
          <p>Copie e cole este código: { codigo } </p>
        </>
      ) : (
        <p>Adicione algum item ao carrinho para gerar o QR code.</p> 
      )}<br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default ButtonCode;
