import React, { Component } from "react";
import ProductContext from "../context/products";
import Product from "./product";
class Products extends Component {
  static contextType = ProductContext;
  render() {
    return (
      <>
        <button onClick={this.context.onReset} className="btn btn-primary">
          reset
        </button>
        {this.context.products.map((p, index) => {
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
  }
}
export default Products;
