import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../fomartCurrency";
import { useAppContext } from "../newHook/useAppContext";
import '../Style/Cart.css'
import ButtonDelete from "./ButtonDelete";
import ButtonCode from "./ButtonCode";

const Cart = () => {
  const { productsCart } = useAppContext();
  const navigate = useNavigate();

  const total = productsCart.reduce((acumulador, item) => {
    const price = Number(item.price);
    return isNaN(price) ? acumulador : acumulador + price;
  },0);
  
  //enviando o valor total para o pagamento
  const goToPayament =() =>{
    navigate('/payamentform', { state : { total }} )
  }
  const goToQRCODE = () => {
    navigate('/buttoncode', { state : { total } })
  }
    
  return (
    <div className="containerProducts">
      {productsCart.map((product, index) => (
        <span key={index}>
          {product?.title}
          <img src={product?.image} />
          <b>${product.price}</b>
          <ButtonDelete product={product}/>
        </span>
      ))}
      <div className="total"> <h2>Total:{ formatCurrency(total, 'BRL') } </h2>

        <button className="btnFromCart" onClick={goToPayament}>Pagamento Cartão</button>
        <button className="btnFromCart" onClick={goToQRCODE}>Pagar com QRCODE</button>
        </div>
    </div>
  );
};

export default Cart;
