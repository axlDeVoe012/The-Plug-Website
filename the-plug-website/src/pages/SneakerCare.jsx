import '../styles/SneakerCare.css';

const SneakerCare = () => (
  <div className="sneaker-care-container">
    <h1 className="sneaker-care-title">Sneaker Care</h1>
    <p className="sneaker-care-subtitle">
      We offer premium sneaker cleaning, restoration, and protection services to keep your kicks fresh, sharp, and long-lasting.
    </p>

    <div className="sneaker-grid">
      <div className="sneaker-card">
        <h2>Deep Cleaning</h2>
        <p>
          Full outsole scrub, midsole whitening, lace refresh, and upper detailing using sneaker-safe, high-grade cleaning products.
        </p>
      </div>

      <div className="sneaker-card">
        <h2>Stain & Odor Removal</h2>
        <p>
          We neutralize odors and remove deep-set stains using eco-friendly, fabric-safe solutions that restore freshness.
        </p>
      </div>

      <div className="sneaker-card">
        <h2>Restoration & Protection</h2>
        <p>
          Services include sole repainting, scratch touch-ups, and long-lasting waterproof & anti-dirt protection sprays.
        </p>
      </div>

      <div className="sneaker-card">
        <h2>Sneaker Laundry Wash</h2>
        <p>
          Hand-washed and air-dried — no machines. Safe for delicate materials, maintaining your sneaker’s shape and longevity.
        </p>
      </div>
    </div>
  </div>
);

export default SneakerCare;
