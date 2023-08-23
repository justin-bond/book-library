import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FavoriteBooksProviderProps {
  children: ReactNode;
}

const FavoriteBooksContext = createContext<any>(null);

export const FavoriteBooksProvider = ({
  children,
}: FavoriteBooksProviderProps) => {
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([]);

  const handleFavoriteBook = (title: string) => {
    setFavoriteBooks((prevState) => {
      if (prevState.find((bookTitle) => bookTitle === title)) {
        return prevState.filter((bookTitle) => bookTitle !== title);
      } else {
        return [...prevState, title];
      }
    });
  };

  useEffect(() => {
    if (initialLoad) {
      localStorage.setItem("favoriteBooks", favoriteBooks.join("|"));
    } else {
      const initialFavoriteBooks = localStorage.getItem("favoriteBooks");

      if (initialFavoriteBooks?.length) {
        setFavoriteBooks(initialFavoriteBooks.split("|"));
      }
      setInitialLoad(true);
    }
  }, [favoriteBooks, initialLoad]);

  return (
    <FavoriteBooksContext.Provider
      value={{
        favoriteBooks,
        handleFavoriteBook,
      }}
    >
      {children}
    </FavoriteBooksContext.Provider>
  );
};

export const useFavoriteBooks = () => {
  const favoriteBooks = useContext(FavoriteBooksContext);
  return favoriteBooks;
};
