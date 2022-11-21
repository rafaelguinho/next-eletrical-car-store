import { CarApi } from "../../../models/types";
import CarItem from "./CarItem";

interface CarsGridProps {
  cars: CarApi[];
}

const CarsGrid: React.FC<CarsGridProps> = ({ cars }) => {
  return (
    <ul>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarsGrid;
