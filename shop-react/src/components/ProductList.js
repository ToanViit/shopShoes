import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import SearchBar from './SearchBar';

class ProductList extends Component {
    state = {
        products: [],
        filteredProducts: [], // Danh sách sản phẩm được lọc
        searchTerm: '', // Từ khóa tìm kiếm
        sortBy: '' // Trường sắp xếp: 'priceLowToHigh' hoặc 'priceHighToLow'
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/getListProduct')
            .then(response => {
                this.setState({ 
                    products: response.data,
                    filteredProducts: response.data // Khởi tạo filteredProducts ban đầu là danh sách sản phẩm đầy đủ
                });
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }

    // Xử lý thay đổi từ khóa tìm kiếm
    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    // Xử lý khi submit form tìm kiếm
    handleSearchSubmit = (searchTerm) => {
        const { products } = this.state;
        // Lọc danh sách sản phẩm theo từ khóa tìm kiếm
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.setState({ filteredProducts });
    }

    // Xử lý thay đổi lựa chọn sắp xếp
    handleChangeSort = (sortBy) => {
        const { filteredProducts } = this.state;
        // Sắp xếp danh sách sản phẩm theo lựa chọn sắp xếp
        if (sortBy === 'priceLowToHigh') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceHighToLow') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
        this.setState({ filteredProducts, sortBy });
    }

    render() {
        return (
            <div className="container">
                <h2 className="section-header">DANH SÁCH CÁC SẢN PHẨM</h2>
                <SearchBar
                    onSubmit={this.handleSearchSubmit}
                    onChangeSort={this.handleChangeSort}
                />
                <div className="row">
                    {this.state.filteredProducts.map(product => (
                        <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                            <Product
                                tag={product.tag}
                                imgSrc={product.imgSrc}
                                title={product.title}
                                price={product.price}
                                sizes={product.sizes}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductList;
