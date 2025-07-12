import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container py-5 text-light text-center">
        <h2 className="fw-bold mb-4">Our Pricing</h2>
        <p className="lead mb-5 text-success">Affordable quality for your lifestyle, powered by the community 🌿</p>

        <div className="row justify-content-center gap-4">

          {/* Cannabis Products Card */}
          <div className="col-md-4 pricing-card blue-card">
            <div className="pricing-header">
              <h4 className="mb-2">🌿 Cannabis Products</h4>
              <p className="subtitle">Premium quality, grown with love</p>
            </div>
            <hr className="divider" />
            <ul className="list-unstyled text-start">
              <li><strong>Pre-Rolls:</strong> R60</li>
              <li><strong>Edibles:</strong> R100 – R250</li>
              <li><strong>Buds (per gram):</strong> R90 – R120</li>
              <li><strong>CBD Oils:</strong> R150 – R300</li>
              <li><strong>Accessories:</strong> From R40</li>
            </ul>
          </div>

          {/* Services Card */}
          <div className="col-md-4 pricing-card black-card">
            <div className="pricing-header">
              <h4 className="mb-2">🛠️ Services</h4>
              <p className="subtitle">Grooming & shine for your lifestyle</p>
            </div>
            <hr className="divider" />
            <ul className="list-unstyled text-start">
              <li><strong>Car Wash:</strong> R70</li>
              <li><strong>Engine Clean:</strong> R180</li>
              <li><strong>Sneaker Care:</strong> R100</li>
              <li>
                <strong>Cannabis Hair Salon:</strong>
                <span className="coming-soon-tag ms-2">Coming Soon!</span>
              </li>
              <li><strong>Ad Spaces:</strong> R100 – R500</li>
            </ul>
          </div>

          {/* Vapes & Hubbly Card */}
          <div className="col-md-4 pricing-card green-card">
            <div className="pricing-header">
              <h4 className="mb-2">💨 Vapes & Hubbly</h4>
              <p className="subtitle">Smooth smoke. Flavour rich. Shared joy.</p>
            </div>
            <hr className="divider" />
            <ul className="list-unstyled text-start">
              <li><strong>Hubbly Rentals:</strong> R50/hr</li>
              <li><strong>Vape Pens:</strong> R200 – R500</li>
              <li><strong>Cartridges:</strong> R100 – R250</li>

              <li className="subheading">✨ Flavours</li>
              <li>Grape Mint • Double Apple • Bubblegum • Cola</li>

              <li className="subheading">🔥 Charcoal</li>
              <li>Quick Light: R20 | Coconut Shell: R40</li>

              <li className="subheading">🧪 Add-ons</li>
              <li>Ice Hose: R30 | Extra Bowl: R25</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
