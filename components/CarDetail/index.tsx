import { CarDetailApi } from "../../models/types";

interface CarDetailProps {
  car: CarDetailApi;
}

const CarDetail: React.FC<CarDetailProps> = ({ car }) => {
  return (
    <section>
      <h1>
        {car.brand} {car.model}
      </h1>
      <h2>{car.description}</h2>

      <div>
        <ul>
          <li>
            <h3>Cidade</h3>
            <strong>{car.city}</strong>
          </li>
          <li>
            <h3>Ano</h3>
            <strong>{car.manufactureYear}/{car.modelYear}</strong>
          </li>
          <li>
            <h3>KM</h3>
            <strong>{car.kilometersDriven}</strong>
          </li>
          <li>
            <h3>Câmbio</h3>
            <strong>{car.transmissionType}</strong>
          </li>
          
          <li>
            <h3>Final de placa</h3>
            <strong>{car.plateLastNumber}</strong>
          </li>
          <li>
            <h3>Cor</h3>
            <strong>{car.color}</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CarDetail;
