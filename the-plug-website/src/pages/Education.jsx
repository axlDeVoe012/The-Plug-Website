import React from 'react';
import 'Home.css'; // Adjust the path if different

const Education = () => {
  
  return (
    <div>
      {/* Hero-style Landing Section */}
      <section className="education-landing">
        <div className="education-overlay"></div>
        <div className="education-content">
          <h1 className="display-5 fw-bold">Cannabis Education</h1>
          <p className="lead">Learn, grow, and use responsibly.</p>
          <a href="#learn-more" className="btn btn-light mt-3">
            Learn More
          </a>
        </div>
      </section>

      {/* Main Educational Content */}
      <div id="learn-more" className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body">
                <h5 className="card-title text-success">Types of Cannabis</h5>
                <p className="card-text">
                  Understand Indica, Sativa, and Hybrid strains — each offers different effects and uses.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body">
                <h5 className="card-title text-success">Effects & Benefits</h5>
                <p className="card-text">
                  Learn how cannabis helps with stress, sleep, and focus — but always start low and go slow.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body">
                <h5 className="card-title text-success">Responsible Use</h5>
                <p className="card-text">
                  Dosage, legality, and safety guidelines help you consume cannabis mindfully and legally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5 p-4 bg-light border rounded">
          <h4 className="mb-3">Did You Know?</h4>
          <p>
            The effects of cannabis vary from person to person. Education empowers you to make safe, informed decisions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Education;
