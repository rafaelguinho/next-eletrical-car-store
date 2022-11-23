import Image from "next/image";
import Link from "next/link";
import { CarApi } from "../../../../models/types";

interface CarItemProps {
  car: CarApi;
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  const linkPath = `/cars/${car.id}`;

  return (
    <li>
      <Link
        href={linkPath}
        className="flex font-sans h-50 bg-slate-700 mb-3 rounded-lg"
      >
        <div className="flex-none w-56 relative">
          <Image
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
            src={car.imageUrl}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>

        <div className="flex max-w-sm p-6">
          <div className="flex flex-wrap">
            <h2
              title={`${car.brand} ${car.model}`}
              className="w-12 flex-auto font-light text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap text-white"
            >
              {`${car.brand} ${car.model}`}
            </h2>

            <h3 className="text-sm w-full text-slate-500">{car.description}</h3>

            <div className="w-full flex-none mt-2 text-3xl font-bold text-yellow-600">
              <h4>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(car.price)}
              </h4>
            </div>

            <div className="w-full flex flex-row justify-between mt-5 text-1xl font-light text-yellow-600">
              <h4>
                {car.manufactureYear} / {car.modelYear}
              </h4>

              <h4>
                {`${new Intl.NumberFormat("pt-BR").format(
                  car.kilometersDriven
                )} km`}
              </h4>
            </div>

            <div className="w-full flex-none mt-5 text-1xl font-light text-yellow-600"></div>

            {/* <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              

              <h4 className="text-sm w-full">{car.kilometersDriven}</h4>

              <h4 className="text-sm w-full">{car.city}</h4>
            </div> */}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CarItem;
