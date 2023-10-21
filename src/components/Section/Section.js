import { Container, Title } from "./Section.stiled";

export const Section = ({ title, children }) => {
  return (
      <Container>
          <Title>
              {title}
          </Title>
      {children}
    </Container>
  );
};
