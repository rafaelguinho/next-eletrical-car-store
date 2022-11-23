import Image from "next/image";
import { CarDetailApi } from "../../models/types";

interface CarDetailProps {
  car: CarDetailApi;
}

const CarDetail: React.FC<CarDetailProps> = ({ car }) => {
  return (
    <section className="w-full flex relative p-4">
      <div className="flex w-full justify-center">
        <Image
          className="w-[70%] bg-gradient-to-t object-cover h-[32rem]"
          loading="lazy"
          placeholder="empty"
          src={car.imageUrl}
          alt="Picture of the author"
          width={1000}
          height={1000}
        />
      </div>

      <div className="p-4 w-[60%] ml-auto mr-auto left-0 right-0 absolute top-[30rem] bg-slate-700 mb-3 rounded-lg">
        <h1 className="flex-auto font-light text-3xl text-white">
          {car.brand} {car.model}
        </h1>
        <h2 className="text-s w-full text-slate-500">{car.description}</h2>

        <div>
          <ul>
            <li>
              <h3>Cidade</h3>
              <strong>{car.city}</strong>
            </li>
            <li>
              <h3>Ano</h3>
              <strong>
                {car.manufactureYear}/{car.modelYear}
              </strong>
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
      </div>
    </section>
  );
};

export default CarDetail;
