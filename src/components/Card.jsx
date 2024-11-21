/* eslint-disable react/prop-types */
import { useState } from "react";

import Indicator from "./Indicator";

function Card({ data, nextPage, prevStep, length, setStep }) {
  const [tailAnimation, setTailAnimation] = useState("");

  function handleAnimation(direction) {
    setTailAnimation(`${direction}-exit`);

    setTimeout(() => {
      if (direction === "left") {
        nextPage();
      } else {
        prevStep();
      }

      setTailAnimation("");
    }, 500);
  }

  return (
    <div className="bg-white shadow rounded bg-outline-light">
      <div className="animation-wrapper">
        <div
          className={`card-custom card ${tailAnimation} `}
          style={{ width: "18rem" }}
        >
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
        </div>
      </div>

      <div className=" d-flex justify-content-between p-4">
        <Indicator step={data.step} length={length} setStep={setStep} />
        <div className="">
          {data.step > 0 && (
            <button
              className="btn btn-outline-dark btn-light rounded-circle mx-2 "
              onClick={() => handleAnimation("right")}
              style={{ width: "50px", height: "50px" }}
            >
              &#8592;
            </button>
          )}
          {data.step < length - 1 && (
            <button
              className="btn btn-dark rounded-circle "
              onClick={() => handleAnimation("left")}
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
