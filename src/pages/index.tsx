import Meta from "@/components/atoms/Meta";
import Container from "@/components/molecules/Container";
import SubjectCards from "@/components/organisms/SubjectCards";
import Layout from "@/components/templates/Layout";

import { SubjectDetails } from "./subject/[slug]";

import "./index.scss";

interface HomeProps {
  subjects: SubjectDetails[];
}

export default function Home({ subjects }: HomeProps) {
  return (
    <Layout title="Library">
      <Meta title="Library" />
      <Container>
        <SubjectCards subjects={subjects} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      subjects: [
        { name: "Bears" },
        { name: "Kittens" },
        { name: "Puppies" },
        { name: "Fiction" },
      ],
    },
  };
}
