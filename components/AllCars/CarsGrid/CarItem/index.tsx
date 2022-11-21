import Image from "next/image";
import { CarApi } from "../../../../models/types";

interface CarItemProps {
  car: CarApi;
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <li>
      <Image
        src={car.imageUrl}
        style={{ objectFit: "scale-down" }}
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <h2>
        {car.brand} {car.model}
      </h2>
      <h3>{car.description}</h3>

      <div>
        <h4>{car.price}</h4>
      </div>

      <div>
        <h4>
          {car.manufactureYear}/{car.modelYear}
        </h4>

        <h4>{car.kilometersDriven}</h4>
      </div>

      <div>
        <h4>{car.city}</h4>
      </div>
    </li>
  );
};

export default CarItem;