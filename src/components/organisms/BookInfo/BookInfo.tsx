import { formatDateString } from "@/utils/stringFormatting";
import { BookDetails } from "@/pages/book/[slug]";

import FavoriteBookButton from "@/components/molecules/FavoriteBookButton";

import "./BookInfo.scss";

const BookInfo = ({ publish_date, description, title }: BookDetails) => {
  const publishDate = formatDateString(publish_date);
  const renderPublishDate = publishDate ? publishDate : "No record";
  const bookDescription =
    typeof description === "object" ? description.value : description;

  return (
    <div className="book-info">
      <div className="book-info__intro">
        <div className="book-info__favorite">
          <FavoriteBookButton bookTitle={title} />
        </div>
        <div className="book-info__publish_date">{`First published: ${renderPublishDate}`}</div>
      </div>
      {description && (
        <div className="book-info__description">{bookDescription}</div>
      )}
    </div>
  );
};

export default BookInfo;
