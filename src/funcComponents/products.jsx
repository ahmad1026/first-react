import { useContext , useEffect } from "react";
import ProductContext from "../context/products";
import Product from "./product";

const Products = (props) => {
  const productContext = useContext(ProductContext);
  useEffect(()=>{
    return ()=>{
      console.log("product unmount");
    }//product unmount live cycle

  });



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
