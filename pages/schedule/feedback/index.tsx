import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Banner from "../../../src/components/banner";
import Body from "../../../src/components/feedback";
import { usePokemonContext } from "../../../src/provider/form-provider";

const Feedback = () => {
  const { schedule, error } = usePokemonContext();
  const router = useRouter();

  const isSucceded = router.query.isSuccessful === "true";

  useEffect(() => {
    if (!schedule && !error) {
      router.push("/schedule");
    }
  }, [schedule, error, router]);

  return (
    <>
      <Head>
        <title>Feedback</title>
      </Head>
      {isSucceded ? (
        <>
          <Banner
            title={"Agendar Consulta"}
            subtitle={"Recupere seus pokémons em 5 segundos"}
          />
          <Body
            isSucceeded
            message={`Seu agendamento para dia ${schedule?.date}, às ${schedule?.time},
para ${schedule?.pokemons.length}x pokémons foi realizado com sucesso!`}
          />
        </>
      ) : (
        <>
          <Banner
            title={"Agendar Consulta"}
            subtitle={"Recupere seus pokémons em 5 segundos"}
          />
          <Body isSucceeded={false} message={`${error?.message}`} />
        </>
      )}
    </>
  );
};

export default Feedback;
