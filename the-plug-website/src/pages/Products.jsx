import React, { useState } from 'react';
import '../styles/Products.css';
import products from '../data/products';
import ProductModal from '../components/ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container py-5 text-white bg-dark min-vh-100">
      <h1 className="text-center mb-5 text-success">🌿 Our Products</h1>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div
              className="card bg-secondary text-white h-100 shadow-lg product-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.mainImage}
                className="card-img-top rounded-top"
                alt={product.name}
                style={{ height: '260px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success fw-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
