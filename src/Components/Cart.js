import { useAppContext } from "../newHook/useAppContext";

const Cart = () => {
  const { productsCart } = useAppContext();

  return (
    <div className="containerCart">
      {productsCart.map((item) => (
        <span key={item.id}>
          {item.title}
          <img src={item.images} />
        </span>
      ))}
    </div>
  );
};

export default Cart;
