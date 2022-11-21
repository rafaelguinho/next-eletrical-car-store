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
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
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
  };
}

export default HomePage;
