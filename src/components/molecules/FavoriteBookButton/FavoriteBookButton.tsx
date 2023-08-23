import { useFavoriteBooks } from "@/providers/FavoriteBooksProvider";

import Button from "@/components/atoms/Button";
import Heart from "@/icons/Heart";

import HeartFilled from "@/icons/HeartFilled";

import "./FavoriteBookButton.scss";
import clsx from "clsx";

interface FavoriteBookButtonProps {
  bookTitle: string;
  hideIcon?: boolean;
  hideText?: boolean;
}

const FavoriteBookButton = ({
  bookTitle,
  hideIcon,
  hideText,
}: FavoriteBookButtonProps) => {
  const { handleFavoriteBook, favoriteBooks } = useFavoriteBooks();

  const bookFavorited = favoriteBooks.includes(bookTitle);

  return (
    <Button
      onClick={() => handleFavoriteBook(bookTitle)}
      className={clsx("favorite-button", {
        favorited: bookFavorited,
        "text-hidden": hideText,
      })}
    >
      {!hideIcon && (bookFavorited ? <HeartFilled /> : <Heart />)}
      {!hideText && "Favorite"}
    </Button>
  );
};

export default FavoriteBookButton;
