import Container from "@/components/molecules/Container";

import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div>{`Book Library© ${date}`}</div>
      </Container>
    </footer>
  );
};

export default Footer;
