import React, { Component } from 'react';
import Products from './classComponents/products';
import Navbar from './navbar/navbar';
class App extends Component {
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
                <Navbar products={this.state.products} />
                <Products
                    products={this.state.products}
                    onDelete={this.handleDelete}
                    onIncrement={this.hanldleIncrement}
                    onDecrement={this.hanldleDecrement}
                    onReset={this.handleReset}
                />
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
        this.setState({ products: newProducts });
    };
    hanldleIncrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex((p) => p.id === productId);
        newProducts[index].count += 1;
        this.setState({ products: newProducts });
    };
    hanldleDecrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex((p) => p.id === productId);
        newProducts[index].count -= 1;
        this.setState({ products: newProducts });
    };
}

export default App;