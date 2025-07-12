import React, { useState } from 'react';
import products from '../data/products';
import ProductModal from '../components/ProductModal';
import '../styles/Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Toggle dark mode on the body tag
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <section className="py-5 bg-dark text-light min-vh-100">
      <div className="container">
        {/* Dark Mode Toggle Button */}
        <div className="text-end mb-4">
          <button
            className="btn btn-sm btn-outline-light"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            🌗 Toggle Dark Mode
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">🌿 Our Products</h2>
          <p className="text-secondary">Browse our premium cannabis, vapes, and accessories.</p>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-lg-4" key={product.id}>
              <div className="position-relative">
                {/* Card */}
                <div className="card bg-success-subtle text-white h-100 border-0 shadow-sm overflow-hidden position-relative">
                  <div className="ratio ratio-4x3 position-relative overflow-hidden">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="object-fit-cover w-100 h-100"
                    />
                    {/* Hover Overlay */}
                    <div className="hover-overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h5 className="fw-bold">{product.name}</h5>
                      <p className="small mb-0">
                        {product.description || 'Premium cannabis or vape product'}
                      </p>
                    </div>

                    {/* Floating Price Tag with conditional red for "Coming Soon" */}
                    <div
                      className={`floating-price ${
                        product.price.toLowerCase() === 'coming soon' ? 'coming-soon' : ''
                      }`}
                    >
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  className="btn btn-outline-success w-100 mt-3 d-flex align-items-center justify-content-center gap-2 animate-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  <i className="bi bi-eye"></i> View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Products;
