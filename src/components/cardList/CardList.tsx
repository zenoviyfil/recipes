import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";
import { getAllRecipes } from "../../services/recipesApi";

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const CardList: React.FC = () => {
  const cardsPerPage = 10;
  const [page, setPage] = useState(1);
  const [RecipesData, setRecipesData] = useState<CardData[]>([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes({ page, cardsPerPage });
        setRecipesData(data.results);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error("Error while fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [page]);

  const totalPages = Math.ceil(totalResults / cardsPerPage)

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {RecipesData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div>
        <p>
          Page {page} of {totalPages}
        </p>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
