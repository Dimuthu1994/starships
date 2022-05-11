function StarShipDetail({ starShip }) {
  return (
    <div>
      <h1>{starShip.name}</h1>
    </div>
  );
}

export default StarShipDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`https://swapi.dev/api/starships/${id}`);
  const starShip = await res.json();

  return { props: { starShip } };
}
