import React, { Component } from "react";
// import Product from "./product";
import Product from "./product";
class Products extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onReset} className="btn btn-primary">
          reset
        </button>
        {this.props.products.map((p, index) => {
          return (
            <Product
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
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
