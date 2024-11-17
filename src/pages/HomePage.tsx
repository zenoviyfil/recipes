import React from 'react';
import { Header } from '../components/header/Header';
import { CardList } from '../components/cardList/CardList';

const HomePage: React.FC = () => {

  return (
    <div>
      <Header username={"Zenuk"} />
      <CardList />
    </div>
  );
};

export { HomePage };
