import React, { useEffect, useState } from 'react';
import '../styles/ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="product-modal card text-light bg-dark"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="btn-close btn-close-white ms-auto p-3" onClick={onClose}></button>

        <div className="row g-4 p-4">
          {/* Image Gallery */}
          <div className="col-md-6">
            <div className="main-image rounded overflow-hidden mb-3">
              <img
                src={selectedImage}
                alt={`${product.name} selected`}
                className="img-fluid object-fit-cover"
              />
            </div>

            {product.images?.length > 1 && (
            <div className="thumbnail-gallery">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h3 className="text-success fw-bold mb-3">{product.name}</h3>
            {product.tag && (
              <span className="badge bg-warning text-dark mb-2">{product.tag}</span>
            )}
            <p className="text-secondary">
              {product.description || 'No description available.'}
            </p>
            <div className="mt-4">
              <span className={`price-tag ${product.price.toLowerCase() === 'coming soon' ? 'coming-soon' : ''}`}>
                {product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
