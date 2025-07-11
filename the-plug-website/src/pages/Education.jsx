import '../styles/Education.css';

const Education = () => (
  <div className="education-container">
    <h1 className="education-title">Cannabis Education</h1>
    <p className="education-subtitle">
      Learn about cannabis, its uses, effects, and how to consume responsibly. Whether you’re new or experienced, this page helps you make informed choices.
    </p>

    <div>
      <div className="education-card">
        <h2>What is Cannabis?</h2>
        <p>
          Cannabis is a plant that contains compounds called cannabinoids, the most well-known being THC and CBD. It is used for both medical and recreational purposes to help with relaxation, pain relief, anxiety, and more.
        </p>
      </div>

      <div className="education-card">
        <h2>THC vs. CBD</h2>
        <p>
          <strong>THC</strong> is the psychoactive compound that gives the “high” feeling. <strong>CBD</strong> is non-psychoactive and known for its calming and pain-relieving properties. Products vary in ratio depending on the experience you’re looking for.
        </p>
      </div>

      <div className="education-card">
        <h2>Ways to Use Cannabis</h2>
        <p>
          Cannabis can be smoked, vaped, eaten (as edibles), applied as topicals, or taken sublingually. Each method has a different onset time and effect duration.
        </p>
      </div>

      <div className="education-card">
        <h2>Responsible Use</h2>
        <p>
          Start low, go slow. Especially with edibles and new strains, it's important to begin with a small dose and wait before consuming more. Always follow local laws and avoid driving or operating machinery while under the influence.
        </p>
      </div>

      <div className="education-card">
        <h2>Is Cannabis Legal?</h2>
        <p>
          In South Africa, cannabis is legal for personal use by adults in private spaces. It remains illegal to sell cannabis commercially without proper licenses. Always stay informed about evolving local laws.
        </p>
      </div>
    </div>
  </div>
);

export default Education;
