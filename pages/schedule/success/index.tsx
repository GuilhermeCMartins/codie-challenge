import Banner from "../../../src/components/banner";
import Feedback from "../../../src/components/feedback";

const Success = () => {
  return (
    <>
      <Banner
        title={"Agendar Consulta"}
        subtitle={"Recupere seus pokémons em 5 segundos"}
      />
      <Feedback
        isSucceeded
        message="Seu agendamento para dia xx/xx/xxxx, às 00h00m,
para 0x pokémons foi realizado com sucesso!"
      />
    </>
  );
};

export default Success;
