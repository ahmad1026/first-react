import Products from "./products";
import Navbar from "./navbar";
import { useState } from "react";
import ProductsContext from "../context/products";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 2, productName: "laptop" },
    { id: 2, count: 5, productName: "phone" },
    { id: 3, count: 7, productName: "airpod" },
  ]);

  return (
    <>
      <ProductsContext.Provider
        value={{
          products: products,
          onDelete: handelDelet,
          onIncrement: hanldleIncrement,
          onDecrement: hanldleDecrement,
          onReset: handleReset,
        }}
      >
        <Navbar />
        <Products />
      </ProductsContext.Provider>
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

export default App;
