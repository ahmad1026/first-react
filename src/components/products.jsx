import { useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 2, productName: "laptop" },
    { id: 2, count: 5, productName: "phone" },
    { id: 3, count: 7, productName: "airpod" },
  ]);
  return (
    <>
      {products.map((p, index) => {
        return (
          <Product
            onDelete={handelDelet}
            id={p.id}
            key={index}
            productName={p.productName}
            count={p.count}
          />
        );
      })}
    </>
  );
  function handelDelet(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }
};

export default Products;
