import { CarDetailApi } from "../../models/types";

interface CarDetailProps {
  car: CarDetailApi;
}

const CarDetail: React.FC<CarDetailProps> = ({ car }) => {
  return (
    <section className="w-full flex relative p-4">
      <div className="flex w-full justify-center">
        <img
          className="xl:w-[70%] sm:w-full bg-gradient-to-t object-cover h-[32rem]"
          loading="lazy"
          placeholder="empty"
          src={car.imageUrl}
          alt="Picture of the author"
          width={1000}
          height={1000}
        />
      </div>

      <div className="shadow-md p-4 xl:w-[60%] max-sm:w-[90%] ml-auto mr-auto left-0 right-0 absolute top-[30rem] bg-slate-700 mb-3 rounded-t-lg">
        <div className="flex justify-between">
          <h1 className="flex-auto font-light text-3xl text-white">
            {car.brand} {car.model}
          </h1>

          <h4 className="text-3xl font-bold text-yellow-600">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(car.price)}
          </h4>
        </div>

        <h2 className="text-xl w-full text-slate-500">{car.description}</h2>

        <ul className="grid lg:grid-cols-4 max-sm:grid-cols-2 gap-5 p-4 mt-2">
          <li className="min-h-[40px]">
            <h3 className="text-xs w-full text-slate-400 mb-">Cidade</h3>
            <address>
              <strong className="font-medium">{car.city}</strong>
            </address>
          </li>
          <li className="min-h-[40px]">
            <h3 className="text-xs w-full text-slate-400 mb-">Ano</h3>
            <strong className="font-medium">
              {car.manufactureYear}/{car.modelYear}
            </strong>
          </li>
          <li className="min-h-[40px]">
            <h3 className="text-xs w-full text-slate-400 mb-">KM</h3>
            <strong className="font-medium">{`${new Intl.NumberFormat(
              "pt-BR"
            ).format(car.kilometersDriven)} km`}</strong>
          </li>
          <li className="min-h-[40px]">
            <h3 className="text-xs w-full text-slate-400 mb-">Câmbio</h3>
            <strong className="font-medium">{car.transmissionType}</strong>
          </li>

          <li className="min-h-[40px]">
            <h3 className="text-xs w-full text-slate-400 mb-">
              Final de placa
            </h3>
            <strong className="font-medium">{car.plateLastNumber}</strong>
          </li>
          <li className="min-h-[40px]">
            <h3 className="text-xs w-full text-slate-400 mb-">Cor</h3>
            <strong className="font-medium">{car.color}</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CarDetail;
