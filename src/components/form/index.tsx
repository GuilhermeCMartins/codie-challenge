import ComboBox from "../input";
import {
  Body,
  Container,
  Divider,
  Flex,
  Header,
  OutlinedButton,
  SectionHeader,
  SubmitButton,
  Subtitle,
  Summary,
  Title,
} from "./styles";
import { FieldError, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import * as yup from "yup";

import Select from "../select";
import { useEffect } from "react";
import useApiOptions from "./hooks/getAllOptions";
import useAllPokeOptions from "./hooks/getAllPokeOptions";

interface FormProps {
  name: string;
  surname: string;
  region: string;
  city: string;
  date: string;
  time: string;
  pokemons: any[];
}

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    surname: yup.string().required("Sobrenome é obrigatório"),
    region: yup.string().required("Região é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    date: yup.string().required("Data é obrigatória"),
    time: yup.string().required("Horário de atendimento é obrigatório"),
    pokemons: yup
      .array()
      .of(
        yup.object({
          pokemon: yup.string().required("Informe o nome do Pokémon"),
        })
      )
      .min(1, "Informe pelo menos um Pokémon")
      .max(6, "Você só pode adicionar até 6 pokémons por vez")
      .required("Informe pelo menos um Pokémon"),
  })
  .required();

const Form = () => {
  const { options: regionsOptions } = useAllPokeOptions("/api/poke/regions");
  const { options: dateOptions } = useApiOptions("/api/scheduling/date");
  const { options: timeOptions } = useApiOptions("/api/scheduling/time");
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const { fields, append } = useFieldArray({
    control,
    name: "pokemons",
  });

  const onAddPokemon = () => {
    if (fields.length === 6) {
      return toast.error("Você só pode adicionar 6 pokemons por vez.");
    }

    append({ pokemon: "" });
  };

  useEffect(() => {
    if (fields.length === 0) {
      append({ pokemon: "" });
    }
  }, [append, fields.length]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Header>Preencha o formulário abaixo para agendar sua consulta</Header>
        <Body>
          <div>
            <Flex $justifyContent="space-between" $alignItems="center">
              <ComboBox
                placeholder="Digite seu nome"
                title="Nome"
                name="name"
                register={register}
                error={errors.name}
              />
              <ComboBox
                placeholder="Digite seu sobrenome"
                title="Sobrenome"
                name="surname"
                register={register}
                error={errors.surname}
              />
            </Flex>
            <Flex
              $justifyContent="space-between"
              $alignItems="center"
              $marginTop="1.25rem"
            >
              <Select
                placeholder="Selecione a região..."
                name="Região"
                register={register}
                error={errors.region}
                options={regionsOptions || []}
              />
              <Select
                placeholder="Selecione a cidade..."
                name="Cidade"
                options={[{ label: "teste", value: "teste5" }]}
                register={register}
                error={errors.city}
              />
            </Flex>
          </div>
          <div>
            <SectionHeader>
              <Title>Cadastre seu time</Title>
              <Subtitle>Atendemos até 06 pokémons por vez</Subtitle>
            </SectionHeader>
            {fields.map((item, index) => (
              <Flex
                key={item.id}
                $justifyContent="space-between"
                $alignItems="center"
                $marginTop="1.25rem"
              >
                <h3 style={{ width: "30%" }}>{`Pokémon ${index + 1}`}</h3>
                <Select
                  placeholder={`Selecione o Pokémon ${index + 1}`}
                  name={``}
                  options={[{ label: "Bulbasaur", value: "poke1" }]}
                  register={register}
                  isArray
                  error={
                    errors.pokemons && (errors.pokemons[index] as FieldError)
                  }
                />
              </Flex>
            ))}

            <OutlinedButton type="button" onClick={onAddPokemon}>
              Adicionar novo pokémon ao time...
            </OutlinedButton>
          </div>
          <Flex
            $alignItems="center"
            $justifyContent="space-between"
            $marginTop="1rem"
          >
            <Select
              placeholder="Selecione uma data"
              name="Data para atendimento"
              options={dateOptions}
              register={register}
              error={errors.date}
            />
            <Select
              name="Horário de Atendimento"
              placeholder="Selecione um horário"
              options={timeOptions}
              register={register}
              error={errors.time}
            />
          </Flex>

          <Divider />
          <Summary>
            <Flex $alignItems="center" $justifyContent="space-between">
              <h3>Número de pokémons a serem atendidos:</h3>
              <h3>{fields.length}</h3>
            </Flex>
            <Flex $alignItems="center" $justifyContent="space-between">
              <h3>Atendimento unitário por pokémon:</h3>
              <h3>R$ 70,00</h3>
            </Flex>
            <Flex $alignItems="center" $justifyContent="space-between">
              <h3>Subtotal:</h3>
              <h3>R$ {fields.length * 70},00</h3>
            </Flex>
            <Flex $alignItems="center" $justifyContent="space-between">
              <h3>Taxa geracional*:</h3>
              <h3>20</h3>
            </Flex>
            <h4>
              *adicionamos uma taxa de 3%, multiplicado pelo número da geração
              mais alta do time, com limite de até 30%
            </h4>

            <Flex
              $alignItems="center"
              $justifyContent="space-between"
              $marginTop="2rem"
            >
              <h2>Valor Total: R$ 72,10</h2>
              <SubmitButton type="submit">Concluir Agendamento</SubmitButton>
            </Flex>
          </Summary>
        </Body>
      </Container>
    </form>
  );
};

export default Form;
