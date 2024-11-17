import React, { useState } from "react";
import { Card } from "../card/Card";

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const dummyData: CardData[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/200",
    title: "Recipe 1",
    description: "Delicious food",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200",
    title: "Recipe 2",
    description: "Tasty meal",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "Recipe 3",
    description: "Yummy dish",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/200",
    title: "Recipe 4",
    description: "Savory treat",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/200",
    title: "Recipe 5",
    description: "Healthy choice",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/200",
    title: "Recipe 6",
    description: "Appetizing delight",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/200",
    title: "Recipe 7",
    description: "Hearty food",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/200",
    title: "Recipe 8",
    description: "Satisfying meal",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/200",
    title: "Recipe 9",
    description: "Flavorful dish",
  },
  {
    id: 10,
    image: "https://via.placeholder.com/200",
    title: "Recipe 10",
    description: "Tasty food",
  },
  {
    id: 11,
    image: "https://via.placeholder.com/200",
    title: "Recipe 11",
    description: "Scrumptious choice",
  },
  {
    id: 12,
    image: "https://via.placeholder.com/200",
    title: "Recipe 12",
    description: "Delightful snack",
  },
];

export const CardList: React.FC = () => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 10;

  const paginatedCards = dummyData.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

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
        {paginatedCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          disabled={page * cardsPerPage >= dummyData.length}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
