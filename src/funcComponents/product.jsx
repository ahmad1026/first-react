import { useContext } from "react";
import ProductContext from "../context/products";


const Product = ({
  id,
  productName,
  count,
}) => {
  const productContext = useContext(ProductContext);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      <button onClick={handleIncrement} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={decreaseProduct} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">
        delete
      </button>
    </div>
  );
  function handleIncrement() {
    productContext.onIncrement(id);
  }
  function decreaseProduct() {
    productContext.onDecrement(id);
  }
  function handleDelete() {
    productContext.onDelete(id);
  }
  function format() {
    if (count === 0) {
      return "zero";
    } else {
      return count;
    }
  }
};

export default Product;
