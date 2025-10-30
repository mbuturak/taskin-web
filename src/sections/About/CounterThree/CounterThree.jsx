const CounterThree = () => {
  return (
    <div className="counter-area-1 space-bottom shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}
      ></div>
      <div className="container">
        <div className="row justify-content-between gy-40">
          <div className="col-auto">
            <div className="counter-card">
              <h2 className="counter-card_number">
                <span className="counter-number">26</span>k+
              </h2>
              <p className="counter-card_text">Projects Completed</p>
            </div>
          </div>
          <div className="col-auto">
            <div className="counter-card">
              <h2 className="counter-card_number">
                <span className="counter-number">98</span>%
              </h2>
              <p className="counter-card_text">Customers Satisfied</p>
            </div>
          </div>
          <div className="col-auto">
            <div className="counter-card">
              <h2 className="counter-card_number">
                <span className="counter-number">20</span>M
              </h2>
              <p className="counter-card_text">Special Machinery</p>
            </div>
          </div>
          <div className="col-auto">
            <div className="counter-card">
              <h2 className="counter-card_number">
                <span className="counter-number">30</span>+
              </h2>
              <p className="counter-card_text">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterThree;
