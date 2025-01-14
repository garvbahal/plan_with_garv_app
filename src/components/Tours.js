import Card from "./Card";

function Tours({ tours, removeTour }) {
  // const tours = props.tours;

  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Garv</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
