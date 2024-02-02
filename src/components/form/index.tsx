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

import Select from "../select";
import { useEffect } from "react";
import { Option } from "../../utils/general-interfaces";
import { defaultCities } from "../../utils/default-values";
import { usePokemonContext } from "../../provider/form-provider";
import useLatestGenerationPokemons from "../../hooks/get-last-generation";
import { schema } from "./utils/schema";
import { ScheduleInterface } from "./utils/types";
import useCreateSchedule from "./hooks/useCreateSchedule";

interface PageProps {
  [key: string]: Option[] | undefined;
}

const Form = ({
  regionsOptions,
  dateOptions,
  timeOptions,
  cityOptions,
  pokemonOptions,
}: PageProps) => {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<ScheduleInterface>({
    resolver: yupResolver(schema),
  });

  const { addPokemon, pokemons } = usePokemonContext();
  const { createSchedule } = useCreateSchedule();
  const latestGeneration = useLatestGenerationPokemons(pokemons);

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

  const subtotal = pokemons.length * 70;

  const tax = Number(latestGeneration) * 3;

  return (
    <form onSubmit={handleSubmit(createSchedule)}>
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
                title="Região"
                name="region"
                register={register}
                error={errors.region}
                options={regionsOptions || []}
                query="region"
                setValue={setValue}
              />
              <Select
                placeholder="Selecione a cidade..."
                title="Cidade"
                name="city"
                options={cityOptions?.length ? cityOptions : defaultCities}
                register={register}
                error={errors.city}
                setValue={setValue}
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
                  title={``}
                  index={index}
                  name={`pokemons.${index}`}
                  options={pokemonOptions || []}
                  register={register}
                  isArray
                  setValue={setValue}
                  addPokemon={addPokemon}
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
              title="Data para atendimento"
              name="date"
              options={dateOptions || []}
              register={register}
              error={errors.date}
              setValue={setValue}
            />
            <Select
              title="Horário de Atendimento"
              name="time"
              placeholder="Selecione um horário"
              options={timeOptions || []}
              register={register}
              error={errors.time}
              setValue={setValue}
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
              <h3>R$ {subtotal},00</h3>
            </Flex>
            <Flex $alignItems="center" $justifyContent="space-between">
              <h3>Taxa geracional*:</h3>
              <h3>R$ {tax},00</h3>
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
              <h2>
                Valor Total: R$
                {subtotal + tax},00
              </h2>
              <SubmitButton type="submit">Concluir Agendamento</SubmitButton>
            </Flex>
          </Summary>
        </Body>
      </Container>
    </form>
  );
};

export default Form;
