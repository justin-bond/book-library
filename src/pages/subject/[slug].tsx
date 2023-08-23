import Container from "@/components/molecules/Container";
import BookCards from "@/components/organisms/BookCards";
import Layout from "@/components/templates/Layout";

import { getBooksBySubject } from "@/lib/api";
import { BookDetails } from "../book/[slug]";
import SubjectCards from "@/components/organisms/SubjectCards";

export interface SubjectDetails {
  key: string;
  name: string;
  works: BookDetails[];
  subjects: SubjectDetails[];
}

interface SubjectPageProps {
  subject: SubjectDetails;
}

const SubjectPage = ({ subject }: SubjectPageProps) => {
  return (
    <Layout title={subject.name} breadcrumbs={[{ label: subject.name }]}>
      <Container>
        <BookCards books={subject.works} />
        <SubjectCards
          title="Related subjects"
          subjects={subject.subjects.slice(0, 4)}
        />
      </Container>
    </Layout>
  );
};

export default SubjectPage;

export const getServerSideProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const subject = await getBooksBySubject(slug);
  return { props: { subject } };
};
