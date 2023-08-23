import Link from "next/link";

import Cards from "@/components/molecules/Cards";

import { BookDetails } from "@/pages/book/[slug]";

import "./BookCards.scss";
import FavoriteBookButton from "@/components/molecules/FavoriteBookButton";

interface BookCardsProps {
  books: BookDetails[];
}

const BookCards = ({ books }: BookCardsProps) => {
  const renderBooks = (book: BookDetails) => {
    const bookID = book.key.split("/")[2];

    return (
      <div className="book-card">
        <Link href={`/book/${bookID}`}>
          <div className="book-card__content">
            <h3>{book.title}</h3>
          </div>
        </Link>
        <div className="book-card__favorite">
          <FavoriteBookButton bookTitle={book.title} hideText />
        </div>
      </div>
    );
  };

  return (
    <div className="book-cards">
      <Cards items={books} itemView={renderBooks} />
    </div>
  );
};

export default BookCards;
