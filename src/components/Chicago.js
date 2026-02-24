import React from 'react';
import marioA from '../icons_assets/Mario and Adrian A.jpg';
import marioB from '../icons_assets/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="container">
        <div className="chicago-inner">
          <div className="chicago-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant.
            </p>
            <p>
              To craft the menu, Mario relies on his experience as a chef and
              inspiration from Italian non-traditional cuisine. Adrian does all
              the marketing for the restaurant and led the effort to expand
              the menu beyond classic Italian to incorporate other Mediterranean
              cuisines.
            </p>
          </div>
          <div className="chicago-images">
            <img src={marioA} alt="Mario and Adrian outside the restaurant" />
            <img src={marioB} alt="Mario and Adrian in the kitchen" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
