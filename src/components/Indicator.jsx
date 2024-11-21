import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faCircle } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function Indicator({ step, length, setStep }) {
  let numbers = Array.from({ length: length }, (_, index) => index);

  return (
    <div className="nav-group d-flex justify-content-evenly align-items-center">
      {numbers.map((n) => (
        <span
          key={n}
          className="rounded"
          onClick={() => setStep(n)}
          style={{ cursor: "pointer" }}
        >
          {step === n ? (
            <FontAwesomeIcon icon={faMinus} className="line" />
          ) : (
            <FontAwesomeIcon icon={faCircle} className="dots" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Indicator;
