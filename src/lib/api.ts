export const getBooksBySubject = async (subject: string) => {
  const response = await fetch(
    `https://openlibrary.org/subjects/${subject}.json?details=true`
  )
    .then((res) => res.json())
    .catch((err) => console.error("Error:", err));

  return response;
};

export const getBookByID = async (id: string) => {
  const response = await fetch(`https://openlibrary.org/works/${id}.json`)
    .then((res) => res.json())
    .catch((err) => console.error("Error:", err));

  return response;
};
