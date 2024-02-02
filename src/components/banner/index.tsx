import Breadcumb from "../breadcumb";
import { BannerContainer, Subtitle, Title } from "./styles";

interface BannerProps {
  title: string;
  subtitle: string;
}
const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <BannerContainer>
      <Breadcumb currentName={title} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </BannerContainer>
  );
};

export default Banner;
