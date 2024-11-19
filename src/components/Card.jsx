/* eslint-disable react/prop-types */
function Card({ data, nextPage }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <button onClick={nextPage}>click</button>
    </div>
  );
}

export default Card;
