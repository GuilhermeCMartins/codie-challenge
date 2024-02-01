import styled from "styled-components";
import Link from "next/link";
import { BreadcumbLinkContainer, Container } from "./style";

export interface BreadcumbItem {
  name: string;
  link: string;
}

export interface BreadcumbProps {
  currentName: string;
  items?: BreadcumbItem[];
}

const defaultBreadcumb = [
  {
    name: "Home",
    link: "/",
  },
];

const BreadcumbItem = ({ name, link }: BreadcumbItem) => {
  return (
    <BreadcumbLinkContainer key={name} $isCurrent={link == ""}>
      <Link
        href={link ?? ""}
        style={{ color: "white" }}
      >
        {name}
      </Link>
    </BreadcumbLinkContainer>
  );
};

const Breadcumb = ({ currentName, items }: BreadcumbProps) => {
  const cumbs = items ? defaultBreadcumb.concat(items) : defaultBreadcumb;

  return (
    <Container>
      {cumbs.map(({ name, link }) => (
        <BreadcumbItem key={name} link={link} name={name} />
      ))}
      <BreadcumbItem key={currentName} link={""} name={currentName} />
    </Container>
  );
};

export default Breadcumb;
