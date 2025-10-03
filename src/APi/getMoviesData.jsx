// Function to fetch movies data from OMDb API
export const getMoviesData = async () => {
  try {
    // Make an API request
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
    );

    // Convert response to JSON (must use await)
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    // Log any errors if request fails
    console.log("Error fetching movies data:", error);
    return null; // return null to handle safely in UI
  }
};
