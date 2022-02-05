import { useContext } from "react";
import ProductContext from "../context/products";
import Product from "./product";

const Products = (props) => {
  const productContext = useContext(ProductContext);
  console.log(productContext);
  return (
    <>
      <button onClick={productContext.onReset} className="btn btn-primary">
        reset
      </button>
      {productContext.products.map((p, index) => {
        return (
          <Product
            id={p.id}
            key={index}
            productName={p.productName}
            count={p.count}
          />
        );
      })}
    </>
  );
};

export default Products;
