import ComboBox from "../input";
import { Container, Flex } from "./styles";
import CustomSelect from "../select";

const Form = () => {
  return (
    <Container>
      <h1
        style={{ textAlign: "center", marginBottom: "1rem", marginTop: "1rem" }}
      >
        Preencha o formulário abaixo para agendar sua consulta
      </h1>
      <div>
        <Flex>
          <ComboBox placeholder="Digite seu nome" title="Nome" name="name" />
          <ComboBox
            placeholder="Digite seu sobrenome"
            title="Sobrenome"
            name="surname"
          />
        </Flex>
        <Flex>
          <CustomSelect
            name="Teste"
            options={[{ label: "teste", value: "teste" }]}
          />
          <CustomSelect
            name="Teste"
            options={[{ label: "teste", value: "teste" }]}
          />
        </Flex>
      </div>
      <div>
        <h3>Cadastre seu time</h3>
        <h4>Atendemos até 06 pokémons por vez</h4>
        <div>
          <h3>Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Name</h3>
          <input type="text" />
        </div>
        <button>Adicionar novo poke..</button>
      </div>
      <div>
        <div>Data para atendimento</div>
        <div>Horário de atendimento</div>
      </div>
      <div>Divider</div>
      <div>
        Número de pokkémons a serem atendidos: Atendimento unitário por pokémon:
        Subtotal: Taxa geracional*: *adicionamos uma taxa de 3%, multiplicado
        pelo número da geração mais alta do time, com limite de até 30%
      </div>

      <div>Valor Total: R$ 72,10 && Concluir Agendamento</div>
    </Container>
  );
};

export default Form;
