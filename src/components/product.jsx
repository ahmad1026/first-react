import { useState } from "react";

const Product = ({ onDelete, id, productName, count: propCount }) => {
  const [count, setCount] = useState(propCount);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{count}</span>
      <button onClick={addProduct} className="m-2 btn btn-sm btn-success">
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
  function addProduct() {
    setCount(count + 1);
  }
  function decreaseProduct() {
    setCount(count - 1);
  }
  function handleDelete() {
    onDelete(id);
  }
};

export default Product;
