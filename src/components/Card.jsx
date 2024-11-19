/* eslint-disable react/prop-types */

function Card({ data, nextPage, step, prevStep }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={data.image}
        style={{
          backgroundColor: data.bgColor,
        }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
      </div>
      <div className="container d-flex justify-content-between p-4">
        <div className="nav-group d-flex justify-content-evenly">
          <span className="fs-1 rounded">{step === 0 ? "-" : "·"}</span>
          <span className="fs-1 rounded">{step === 1 ? "-" : "·"}</span>
          <span className="fs-1 rounded">{step === 2 ? "-" : "·"}</span>
        </div>
        <div className="">
          {step > 0 && (
            <button
              className="btn btn-outline-dark btn-light rounded-circle mx-2"
              onClick={prevStep}
              style={{ width: "50px", height: "50px" }}
            >
              &#8592;
            </button>
          )}
          {step < 2 && (
            <button
              className="btn btn-dark rounded-circle"
              onClick={nextPage}
              style={{ width: "50px", height: "50px" }}
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
