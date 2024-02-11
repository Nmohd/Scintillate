function extractNumberFromUrl(input) {
  const parts = input.split("/");
  const lastPart = parts[parts.length - 2];
  return parseInt(lastPart);
}

async function fetchFilmTitles(filmsArray) {
  let filmTitles = [];

  for (const filmUrl of filmsArray) {
    try {
      const response = await fetch(filmUrl);
      const filmData = await response.json();
      if (filmData.title) {
        filmTitles.push(filmData.title);
      }
    } catch (error) {
      console.error("Error fetching film:", error);
    }
  }

  return filmTitles;
}

export { extractNumberFromUrl, fetchFilmTitles };
