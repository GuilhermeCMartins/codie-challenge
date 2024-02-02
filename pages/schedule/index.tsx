import { GetServerSideProps } from "next";
import Banner from "../../src/components/banner";
import Form from "../../src/components/form";
import { fetchData } from "../../src/hooks/fetch-data";
import { Option } from "../../src/utils/general-interfaces";
import Head from "next/head";

interface PageProps {
  [key: string]: Option[] | undefined;
}

const FormSchedule = ({
  regionsOptions,
  dateOptions,
  timeOptions,
  cityOptions,
  pokemonOptions,
}: PageProps) => {
  return (
    <>
      <Head>
        <title>Agendar Consulta</title>
      </Head>
      <Banner
        title={"Agendar Consulta"}
        subtitle={"Recupere seus pokémons em 5 segundos"}
      />
      <Form
        regionsOptions={regionsOptions}
        dateOptions={dateOptions}
        timeOptions={timeOptions}
        cityOptions={cityOptions}
        pokemonOptions={pokemonOptions}
      />
    </>
  );
};

export default FormSchedule;

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query,
}) => {
  const { region } = query;

  return {
    props: {
      dateOptions: await fetchData("/scheduling/date"),
      timeOptions: await fetchData("/scheduling/time"),
      regionsOptions: await fetchData("/poke/regions"),
      pokemonOptions: await fetchData("/poke/pokemons"),
      cityOptions: region ? await fetchData(`/poke/cities?id=${region}`) : [],
    },
  };
};
