/* eslint-disable react/prop-types */

import Indicator from "./Indicator";

function Card({ data, nextPage, prevStep, length }) {
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
        <Indicator step={data.step} length={length} />
        <div className="">
          {data.step > 0 && (
            <button
              className="btn btn-outline-dark btn-light rounded-circle mx-2"
              onClick={prevStep}
              style={{ width: "50px", height: "50px" }}
            >
              &#8592;
            </button>
          )}
          {data.step < length - 1 && (
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
