import { CarApi } from "../../../models/types";
import CarItem from "./CarItem";

interface CarsGridProps {
  cars: CarApi[];
}

const CarsGrid: React.FC<CarsGridProps> = ({ cars }) => {
  return (
    <ul className="grid xl:grid-cols-3 sm:grid-cols-1 gap-4 p-4">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarsGrid;
