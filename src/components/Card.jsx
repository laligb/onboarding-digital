/* eslint-disable react/prop-types */
function Card({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Card;
