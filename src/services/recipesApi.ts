import axios from "axios";

const REACT_APP_DATA_BASE_API_KEY = process.env.REACT_APP_DATA_BASE_API_KEY;
const REACT_APP_DATA_BASE_URL = process.env.REACT_APP_DATA_BASE_URL;

type getAllRecipesProps = {
  page: number;
  cardsPerPage: number;
};

export const getAllRecipes = async ({
  page,
  cardsPerPage,
}: getAllRecipesProps): Promise<any> => {
  try {
    const response = await axios.get(`${REACT_APP_DATA_BASE_URL}/recipes/complexSearch`, {
      params: {
        number: cardsPerPage,
        offset: (page - 1) * cardsPerPage,
        apiKey: REACT_APP_DATA_BASE_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
