import * as yup from "yup";

export const schema = yup
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
