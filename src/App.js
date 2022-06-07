import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Чизбургер-пицца" price={450} />
              <PizzaBlock title="Мексиканская пицца" price={395} />
              <PizzaBlock title="Просто пицца" price={546} />
              <PizzaBlock title="Пицца с ананасом" price={125} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
