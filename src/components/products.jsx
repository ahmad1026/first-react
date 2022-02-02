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
      <button onClick={handleReset} className="btn btn-primary">
        reset
      </button>
      {products.map((p, index) => {
        return (
          <Product
            onReset={handleReset}
            onDelete={handelDelet}
            onIncrease={hanldleIncrement}
            onDecrecres={hanldleDecrement}
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
  function handleReset() {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newProducts);
  }
  function hanldleIncrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }
  function hanldleDecrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
};

export default Products;
