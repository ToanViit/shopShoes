import React from 'react';

const Product = ({ tag, imgSrc, title, price, sizes }) => {
    // Chuyển đổi chuỗi JSON thành mảng nếu sizes là một chuỗi JSON hợp lệ
    let sizesArray = [];
    try {
        sizesArray = JSON.parse(sizes);
    } catch (error) {
        console.error('Error parsing sizes JSON:', error);
    }

    return (
        <div className="products_item">
            <span className="products_item_tag">{tag}</span>
            <a href="#" className="item">
                {/* <img src={imgSrc} alt="" className="img-product" /> */}
                <img src={"./imgs/44.png"} alt="" className="img-product" />
            </a>
            <div className="grid-product__link">
                <div className="grid-product_title text_decrib">{title}</div>
                <label className="grid-product_price_child">{price}</label>
                <ul className="shoe-sizes">
                    {sizesArray.map((size, index) => <li key={index}>{size}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Product;
