import React, { Component } from "react";
import "./product.css";
class Product extends Component {
  state = {
    count: this.props.count,
  };
  render() {
    const { productName } = this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">
          {this.state.count ? this.state.count : "zero"}
        </span>
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
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };
}

export default Product;
