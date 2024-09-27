export const formatCurrency = (value, currency) => {
    if (isNaN(value)) return 'Invalid number';  // Opcional: para verificar NaN
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(value);
  };
  