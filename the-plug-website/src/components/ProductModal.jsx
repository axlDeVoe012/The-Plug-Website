import React, { useEffect } from 'react';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1040 }}
      ></div>

      {/* Modal */}
      <div
        className="modal show fade d-block"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1050 }}
        onClick={onClose}
        aria-labelledby="productModalLabel"
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-dark text-white border-success border-2 shadow rounded-4">
            <div className="modal-header border-0">
              <h5 className="modal-title text-success" id="productModalLabel">
                {product.name}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div
              className="modal-body"
              style={{ maxHeight: '70vh', overflowY: 'auto' }}
            >
              <div className="row g-3">
                {product.images.map((img, idx) => (
                  <div key={idx} className="col-6">
                    <img
                      src={img}
                      alt={`${product.name} image ${idx + 1}`}
                      className="img-fluid rounded border border-success shadow"
                      style={{
                        maxHeight: '250px',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-success fw-bold fs-5">
                Price: {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
