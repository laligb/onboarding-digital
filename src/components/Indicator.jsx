// eslint-disable-next-line react/prop-types
function Indicator({ step, length }) {
  let numbers = Array.from({ length: length }, (_, index) => index);

  return (
    <div className="nav-group d-flex justify-content-evenly">
      {numbers.map((n) => (
        <span key={n} className="fs-1 rounded">
          {step === n ? "-" : "·"}
        </span>
      ))}
    </div>
  );
}

export default Indicator;
