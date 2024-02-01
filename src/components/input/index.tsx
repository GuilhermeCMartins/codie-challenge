import { Name, Container, Input } from "./styles";

interface InputProps {
  name: string;
  title: string;
  placeholder: string;
}
const ComboBox = ({ name, title, placeholder }: InputProps) => {
  return (
    <Container>
      <Name>{title}</Name>
      <Input type="text" name={name} placeholder={placeholder} />
    </Container>
  );
};

export default ComboBox;
