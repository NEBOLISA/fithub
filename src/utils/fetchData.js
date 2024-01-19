export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "0d4f0f58c8mshbc144e01b4abe61p1e618bjsn22d79e49cc16",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0d4f0f58c8mshbc144e01b4abe61p1e618bjsn22d79e49cc16",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
