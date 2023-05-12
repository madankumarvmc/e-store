import React from 'react';

const products = [
  require('../assets/img/shop/shop-1.jpg'),
  require('../assets/img/shop/shop-2.jpg'),
  require('../assets/img/shop/shop-3.jpg'),
  require('../assets/img/shop/shop-4.jpg'),
  require('../assets/img/shop/shop-5.jpg'),
];

const Product = () => (
  <div className="row">
    {products.map((item, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className="card mb-4">
          <img className="card-img-top" src={item} alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Furry Hooded</h5>
            <div className="card-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="card-price">$590.0</div>
            <a href={item} className="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Product;
