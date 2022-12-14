import { GetStaticPropsContext } from "next";
import Head from "next/head";
import React from "react";
import CarDetail from "../../../components/CarDetail";
import { CarDetailApi } from "../../../models/types";
import CarsService from "../../../services/cars";

interface CarDetailPageProps {
  car: CarDetailApi;
}

const CarDetailPage: React.FC<CarDetailPageProps> = ({ car }) => {
  const cardDescription = `${car.brand} ${car.model} ${car.modelYear}`;
  return (
    <>
      <Head>
        <title>Carro elétrico - {cardDescription}</title>
        <meta name="description" content={`Compre o ${cardDescription} pronta entrega e preço imbatível.`} />
      </Head>
      <CarDetail car={car} />
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const carId = context?.params?.carId as string;

  const carsService = new CarsService();

  const car: CarDetailApi = await carsService.getCar(carId);

  return {
    props: {
      car,
    },
    revalidate: 60, // In seconds
  };
}

export async function getStaticPaths() {
  const carsService = new CarsService();
  const ids: string[] = await carsService.getCarsIds();

  return {
    paths: ids.map((id) => ({ params: { carId: id } })),
    fallback: 'blocking',
  };
}

export default CarDetailPage;
