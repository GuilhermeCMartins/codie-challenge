import Banner from "../../../src/components/banner";
import Feedback from "../../../src/components/feedback";

const Failed = () => {
  return (
    <>
      <Banner
        title={"Agendar Consulta"}
        subtitle={"Recupere seus pokémons em 5 segundos"}
      />
      <Feedback isSucceeded={false} message="error message!" />
    </>
  );
};

export default Failed;
