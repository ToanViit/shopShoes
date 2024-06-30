import React, { Component } from 'react';

class Index extends Component {
    constructor()  { 
        super();
        this.productApi ='http://127.0.0.1:8000/api/getListProduct' ;
        this.state =  { 
            products : [],
        }
    }

    getProducts = async ()=> { 
        const response  = await fetch(this.productApi );
        if (response.ok)  { 
            const products = await response.json();
            console.log(products);
        }
    }

    componentDidMount = ()=> { 
        this.getProducts();
    }
    render() {
        this.getProducts(); 
        return (
          
            <div>
         
                <div id="carouselExampleControls" className="position-relative carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./imgs/ome3.jpg" className="w-100" alt="..." />
                            <div className="carousel-caption">
                                <div className="position-absolute slideText">
                                    <h4 className="text_title_">Do you want the best shoes in the world?</h4>
                                    <h4 className="text_title2">COME WITH TEV</h4>
                                    <button className="btn_order">Order now</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./imgs/ome4.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <div className="position-absolute slideText">
                                    <h4 className="text_title_">Do want the best shoes in the world?</h4>
                                    <h4 className="text_title2">WOMEN SHOES'S</h4>
                                    <button className="btn_order">Order now</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./imgs/ome5.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <div className="position-absolute slideText">
                                    <h4 className="text_title_">Do want the best shoes in the world?</h4>
                                    <h4 className="text_title2">MAN SHOES</h4>
                                    <button className="btn_order">Visit my website</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Shopping Section */}
                <div className="section mx-40">
                    <h2 className="section-header">DANH SÁCH CÁC MÓN</h2>
                    <div className="grid-product">
                        {this.renderProduct("New", "./imgs/shoes.png", "MAYA PATENT BALLERINA - ICE BLUE", "€129.95", ["US 6", "US 7", "US 8", "US 9"])}
                        {this.renderProduct("New", "./imgs/shoes.png", "MAYA PATENT BALLERINA - ICE BLUE", "€129.95", ["US 6", "US 7", "US 8", "US 9"])}
                        {this.renderProduct("New", "./imgs/22.png", "MAYA PATENT BALLERINA - ICE BLUE", "€129.95", ["US 6", "US 7", "US 8", "US 9"])}
                        {this.renderProduct("New", "./imgs/3.png", "MAYA PATENT BALLERINA - ICE BLUE", "€129.95", ["US 6", "US 7", "US 8", "US 9"])}
                        {this.renderProduct("New", "./imgs/44.png", "MAYA BALLERINA - ICE BLUE", "€129.95", ["US 6", "US 7", "US 8", "US 9"])}
                    </div>
                </div>

                {/* Follow Us Section */}
                <div className="seaction_noiti mx-40">
                    <h2 className="section-header">THEO DÕI CHÚNG TÔI ĐỂ NHẬN ƯU ĐÃI</h2>
                    <div className="grid-noitce flex inline-flex">
                        {this.renderFollowUs("imgs/o.jpg")}
                        {this.renderFollowUs("imgs/tr.jpg")}
                        {this.renderFollowUs("imgs/t.jpg")}
                    </div>
                </div>

                {/* Shoe Types Section */}
                <div className="section_typeShoes">
                    <div className="grid-typeShoes">
                        {this.renderShoeType("SHOP SNEAKER", "./imgs/shoes1 (1).jpg")}
                        {this.renderShoeType("SHOP BOOTS", "./imgs/shoes1 (2).jpg")}
                        {this.renderShoeType("SHOP CROCS", "./imgs/shoes1 (3).jpg")}
                        {this.renderShoeType("SHOP SLIDE", "./imgs/shoes1 (4).jpg")}
                    </div>
                </div>
                <div className="section_typeShoes">
                    <div className="grid-typeShoes">
                        {this.renderShoeType("SHOP DENIM", "./imgs/shoes1 (2).jpg")}
                        {this.renderShoeType("SHOP LOAFER", "./imgs/shoes1 (1).jpg")}
                        {this.renderShoeType("SHOP CHELSEA", "./imgs/shoes1 (4).jpg")}
                        {this.renderShoeType("SHOP DERBY", "./imgs/shoes1 (3).jpg")}
                    </div>
                </div>

                {/* New Arrivals Section */}
                <div className="section_typeShoes">
                    <div className="grid-arrvial">
                        {this.renderArrival("HEELS", "./imgs/shoes1 (2).jpg")}
                        {this.renderArrival("NEW ARRIVE", "./imgs/shoes1 (1).jpg")}
                        {this.renderArrival("MENS SHOES", "./imgs/shoes1 (4).jpg")}
                    </div>
                </div>

                {/* Highlight Section */}
                <div className="section_highlight position-relative">
                    <div className="img_highlight position-absolute">
                        <div className="img_all position-relative">
                            <img className="img_under" src="./imgs/adrian.jpg" alt="" />
                            <img className="img_above" src="./imgs/adrian2.jpg" alt="" />
                        </div>
                        <div className="text_hightlight">
                            <div className="text_1">EDGE FOR EVERYDAY AND PARTY</div>
                            <div className="text_2">HIGHLIGHT</div>
                            <div className="text_3">Vega Bootie Suede</div>
                            <button className="btnMore">SEE MORE</button>
                        </div>
                        <div className="text_intro">
                            <h2 className="text_11">WELCOME TO THE SHOE THE BEAR UNIVERSE</h2>
                            <h2 className="text_22">We design footwear for modern people, with a focus on design and quality. Using
                                traditional Danish design principles, meticulous attention to detail and enhanced functionality, we
                                create timeless products that can be worn season after season. As proud members of the Leather
                                Working Group, we enforce our best practices in responsible sourcing and production of our products.
                                Our exploration of color, shape and texture is enhanced by our creative use of components, leather
                                and textiles. We strive to continuously improve and develop our collections with a focus on
                                responsibility, functionality and modernity.</h2>
                            <div className="text_33">Modern footwear from Denmark made responsibly</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderProduct(tag, imgSrc, title, price, sizes) {
        return (
            <div className="products_item">
                <span className="products_item_tag">{tag}</span>
                <a href="#" className="item">
                    <img src={imgSrc} alt="" className="img-product" />
                </a>
                <div className="grid-product__link">
                    <div className="grid-product_title text_decrib">{title}</div>
                    <label className="grid-product_price_child">{price}</label>
                    <ul className="shoe-sizes">
                        {sizes.map((size, index) => <li key={index}>{size}</li>)}
                    </ul>
                </div>
            </div>
        );
    }

    renderFollowUs(imgSrc) {
        return (
            <div className="noitce position-relative">
                <div className="noitce_Sale1 width-100">
                    <img className="noitce_Sale12 width-100" src={imgSrc} alt="" />
                </div>
                <i className="fa fa-instagram instagram-icon" style={{ fontSize: '24px' }}></i>
            </div>
        );
    }

    renderShoeType(title, imgSrc) {
        return (
            <div className="typeShoes position-relative">
                <div className="typeShoes_item position-relative">
                    <img className="typeShoes_Title_img" src={imgSrc} alt="" />
                    <div className="typeShoes_Title">{title}</div>
                </div>
            </div>
        );
    }

    renderArrival(title, imgSrc) {
        return (
            <div className="typeShoes position-relative">
                <div className="arrvial_item position-relative">
                    <img className="typeShoes_Title_img" src={imgSrc} alt="" />
                    <div className="arrive_Titile flex">
                        <span className="arrive_title_child">{title}</span>
                        <button className="btnMore">SEE MORE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
