import React, { Component } from "react";
import ProductContext from '../context/products';
class Navbar extends Component {
  static contextType = ProductContext;
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Navbar Sum product is : {this.calsum()}
          </a>
        </div>
      </nav>
    );
  }
  calsum = () => {
    let sum = 0;
    this.context.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  };
}

export default Navbar;
