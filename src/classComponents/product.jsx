import React, { Component } from "react";
class Product extends Component {
  render() {
    const { productName } = this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={this.handleIncrease}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handleDecrease}
          className="m-2 btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={this.handleDelete}
          className="m-2 btn btn-sm btn-danger"
        >
          delete
        </button>
      </div>
    );
  }

  handleIncrease = () => {
    this.props.onIncrement(this.props.id);
  };
  handleDecrease = () => {
    this.props.onDecrement(this.props.id);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };
  format = () => {
    if (this.props.count === 0) {
      return "zero";
    } else {
      return this.props.count;
    }
  };
}

export default Product;
