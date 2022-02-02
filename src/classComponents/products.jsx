import React, { Component } from "react";
// import Product from "./product";
import Product from "./product";
class Products extends Component {
  state = {
    products: [
      { id: 1, count: 2, productName: "laptop" },
      { id: 2, count: 5, productName: "phone" },
      { id: 3, count: 7, productName: "airpod" },
    ],
  };
  render() {
    return (
      <>
        <button onClick={this.handleReset} className="btn btn-primary">
          reset
        </button>
        {this.state.products.map((p, index) => {
          return (
            <Product
              onDelete={this.handleDelete}
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
  handleDelete = (productId) => {
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };
  handleReset = () => {
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newProducts});
  };
}

export default Products;
