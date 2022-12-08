import Head from "next/head";
import AllCars from "../components/AllCars";
import { CarApi } from "../models/types";
import CarsService from "../services/cars";

interface AllCarsPageProps {
  cars: CarApi[];
}

const HomePage: React.FC<AllCarsPageProps> = ({ cars }) => {
  return (
    <>
      <Head>
        <title>Carros elétricos</title>
        <meta
          name="description"
          content="Carros elétricos com grande autonomia, não poluem o meio ambiente e você economiza."
        />
      </Head>
      <AllCars cars={cars} />
    </>
  );
};

export async function getStaticProps() {
  const carsService = new CarsService();
  const allCars: CarApi[] = await carsService.getCars();

  return {
    props: {
      cars: allCars,
    },
    revalidate: 30, // In seconds
  };
}

export default HomePage;
