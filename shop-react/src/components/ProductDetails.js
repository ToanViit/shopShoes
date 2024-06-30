import React, { Component } from 'react';
import '../styles/productDetails.css';
import config from '../config.json'
const { SERVER_API } = config;

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        };
    }

    componentDidMount() {
        const { id } = this.props;
        this.getProduct(id);
    }

    getProduct = async (id) => { 
        try {
            const response = await fetch(`${SERVER_API}/products/${id}`);
            if (response.ok) { 
                const product = await response.json();
                console.log(product);
                this.setState({ 
                    product: product,
                });
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    render() {
        const { product } = this.state;

        return (
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 product-image-section">
                            <img src={product.image_url} alt="Product Image" />
                        </div>
                        <div className="col-md-6 product-info-section">
                            <h1 className="product-title1">{product.title}</h1>
                            <div className="product-price">{product.price} VND</div>
                            <div className="product-unit-price">{product.unit_price}</div>
                            <div className="product-color">
                                <span>Color</span>
                                <br />
                                {product.colors && product.colors.map((color, index) => (
                                    <div className="product-swatch" style={{ backgroundColor: color }} key={index}></div>
                                ))}
                            </div>
                            <div className="product-size">
                                <span>Size</span>
                                <br />
                                {product.sizes && product.sizes.map((size, index) => (
                                    <div className="product-option" key={index}>{size}</div>
                                ))}
                            </div>
                            <a className="product-size-chart" href="#">Size chart</a>
                            <a href="#" className="btn mt-3 product-btn-black">Add to cart</a>
                            <div className="product-certificates mt-3">
                                {/* SVG icons here */}
                            </div>
                        </div>
                    </div>

                    <h2 className="product-title2 mt-5">Similar Products</h2>
                    <div className="row">
                        {product.similarProducts && product.similarProducts.map(similarProduct => (
                            <div className="col-md-3 product-item" key={similarProduct.id}>
                                <img src={similarProduct.image_url} alt="Product Image" />
                                <div className="product-info">
                                    <h5>{similarProduct.name}</h5>
                                    <p>Price: {similarProduct.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductDetails;
