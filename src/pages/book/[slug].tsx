import Meta from "@/components/atoms/Meta";
import Container from "@/components/molecules/Container";
import BookInfo from "@/components/organisms/BookInfo";
import Layout from "@/components/templates/Layout";

import { getBookByID } from "@/lib/api";

export interface BookDetails {
  key: string;
  title: string;
  description: string | { value: string };
  publish_date: string;
  bookId: string;
  subjects: string[];
}

interface BookPageProps {
  book: BookDetails;
}

const BookPage = ({ book }: BookPageProps) => {
  return (
    <Layout title={book.title} breadcrumbs noBackground>
      <Meta title={book.title} />
      <Container>
        <BookInfo {...book} />
      </Container>
    </Layout>
  );
};

export default BookPage;

export const getServerSideProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const book = await getBookByID(slug);
  return { props: { book } };
};
