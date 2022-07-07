import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <>
        <div className="categories">
          <ul>
            {categories.map((categoryName, index) => (
              <li
                key={index}
                className={value === index ? 'active' : ''}
                onClick={() => onChangeCategory(index)}
              >
                {categoryName}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
);
