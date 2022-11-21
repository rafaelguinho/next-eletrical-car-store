import { CarApi } from "../../models/types";
import CarsGrid from "./CarsGrid";

interface AllCarsProps {
  cars: CarApi[];
}

const AllCars: React.FC<AllCarsProps> = ({ cars }) => {
  return (
    <section>
      <h1>All Cars</h1>
      <CarsGrid cars={cars} />
    </section>
  );
};

export default AllCars;
