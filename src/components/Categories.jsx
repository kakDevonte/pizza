import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((value, index) => (
            <li
              className={activeIndex === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
