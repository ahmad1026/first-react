import React, { Component } from "react";
class Navbar extends Component {
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
    this.props.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  };
}

export default Navbar;
