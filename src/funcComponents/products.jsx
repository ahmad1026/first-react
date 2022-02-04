import Product from "./product";
const Products = ({
  products,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <>
      <button onClick={onReset} className="btn btn-primary">
        reset
      </button>
      {products.map((p, index) => {
        return (
          <Product
            onReset={onReset}
            onDelete={onDelete}
            onIncrease={onIncrement}
            onDecrecres={onDecrement}
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
