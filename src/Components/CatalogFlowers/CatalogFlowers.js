import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { createSelector } from 'reselect';

// import components
import SingleCatalogItem from '../SingleCatalogItem/SingleCatalogItem';
import downIcon from '../../assets/Icons/downIcon.png';

//import functions
import {
  fetchFlowers,
  setActiveSortFilter,
  addCountFlowers,
  removeCountFilters,
} from './flowers_slice';

//imort style files
import './CatalogFlowers.scss';

function CatalogFlowers({ page }) {
  const dispatch = useDispatch();
  const { flowers, loading, activeSortFilter, activeCountFlowers } =
    useSelector((state) => state.flowers);
  const {
    minCost,
    maxCost,
    activeColor,
    activeDiameter,
    activeLength,
    activePersonals,
  } = useSelector((state) => state.filter);

  const [showFilters, setShowFilters] = useState(false);

  const selectedNewsFilter = createSelector(
    (state) => state.flowers.flowers,
    (state) => state.filter.activeFlower,
    (flowers, activeFlower) => {
      if (activeSortFilter === 'По алфавиту') {
        return flowers.slice().sort((a, b) => a.title.localeCompare(b.title));
      } else if (activeSortFilter === 'По убыванию цены') {
        return flowers.slice().sort((a, b) => b.price - a.price);
      } else if (activeSortFilter === 'По возрастанию цены') {
        return flowers.slice().sort((a, b) => a.price - b.price);
      }

      if (activeFlower === null) {
        if (activeColor !== '') {
          return flowers.filter((flower) => flower.color == activeColor);
        } else if (activePersonals.length !== 0) {
          return flowers.filter(
            (flower) =>
              flower.for_who.title == activePersonals.find((person) => person)
          );
        } else if (activeDiameter.length !== 0) {
          if (activeDiameter.find((diameter) => diameter === 'До 25 см')) {
            return flowers.filter((flower) => flower.width.title <= '25');
          } else if (
            activeDiameter.find((diameter) => diameter === '26-40 см')
          ) {
            return flowers.filter(
              (flower) =>
                flower.width.title >= '26' && flower.width.title <= '40'
            );
          } else if (
            activeDiameter.find((diameter) => diameter === '41-55 см')
          ) {
            return flowers.filter(
              (flower) =>
                flower.width.title >= '41' && flower.width.title <= '55'
            );
          } else if (
            activeDiameter.find((diameter) => diameter === 'Более 55 см')
          ) {
            return flowers.filter((flower) => flower.width.title > '55');
          }
        } else if (activeLength.length !== 0) {
          if (activeLength.find((length) => length === 'До 45 см')) {
            return flowers.filter((flower) => flower.length.title <= '45');
          } else if (activeLength.find((length) => length === '46-60 см')) {
            return flowers.filter(
              (flower) =>
                flower.length.title >= '46' && flower.length.title <= '60'
            );
          } else if (activeLength.find((length) => length === '61-75 см')) {
            return flowers.filter(
              (flower) =>
                flower.length.title >= '61' && flower.length.title <= '75'
            );
          } else if (activeLength.find((length) => length === 'Более 75 см')) {
            return flowers.filter((flower) => flower.length.title > '75');
          }
        } else if ((minCost, maxCost)) {
          return flowers.filter(
            (flower) =>
              Number(flower.price) >= minCost && Number(flower.price) <= maxCost
          );
        } else if (activeSortFilter === 'По алфавиту') {
        }
        return flowers;
      } else {
        return flowers.filter((item) => item.category === activeFlower);
      }
    }
  );

  const visibleFlowers = useSelector(selectedNewsFilter);

  useEffect(() => {
    dispatch(fetchFlowers());

    // eslint-disable-next-line
  }, []);

  const renderFlowers = (array) => {
    if (loading) {
      return <h1>Loading</h1>;
    }
    if (loading === 'error') {
      return <h1>Error</h1>;
    }

    if (array.length > 0) {
      return array.map((item) => {
        return <SingleCatalogItem key={uuid()} {...item} item={item} />;
      });
    } else {
      return <h1>Nothing found</h1>;
    }
  };

  const renderDropdown = () => {
    const filters = [
      'По алфавиту',
      'По популярности',
      'По убыванию цены',
      'По возрастанию цены',
    ];

    return filters.map((item) => {
      const filterClassName = classNames('sort-item', {
        active: item === activeSortFilter,
      });
      return (
        <p
          onClick={() => {
            dispatch(setActiveSortFilter(item));
            setShowFilters(false);
          }}
          className={filterClassName}
        >
          {item}
        </p>
      );
    });
  };

  const renderCountFilters = () => {
    const numbers = [
      25, 21, 15, 301, 45, 40, 100, 200, 125, 47, 73, 86, 34, 49,
    ];

    const handleCount = (item, addState = Function, removeState = Function) => {
      const index = activeCountFlowers.findIndex((s) => s === item);
      if (index < 0) {
        return dispatch(addState(item));
      } else {
        dispatch(removeState(item));
      }
    };

    return numbers.map((item) => {
      const filterClassName = classNames('single-count-item', {
        active: activeCountFlowers.includes(item),
      });
      return (
        <div
          onClick={() => {
            handleCount(item, addCountFlowers, removeCountFilters);
          }}
          className={filterClassName}
        >
          <p>Букеты из {item} розы</p>
          <span>
            <i class='fa-solid fa-xmark'></i>
          </span>
        </div>
      );
    });
  };

  const renderPreOrder = (array) => {
    if (loading) {
      return;
    }
    return array.map((item) => {
      return <SingleCatalogItem {...item} preOrder={true} />;
    });
  };

  return (
    <div className='catalog-flowers'>
      <div className='header-section'>
        {page === 'category' ? (
          // eslint-disable-next-line
          <h1 className='section-header'></h1>
        ) : (
          <h1 className='section-header'>Букеты из роз</h1>
        )}
        <div className='sort-box'>
          <label>Сортировать:</label>
          <div className='dropdown-menu'>
            <div
              onClick={() => {
                setShowFilters((prev) => !prev);
              }}
              className='active-menu'
            >
              <p>{activeSortFilter}</p>
              <img src={downIcon} alt='' />
            </div>
            {showFilters ? (
              <div className='dropped-menu'>{renderDropdown()}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='flowers-count-filters'>
        {renderCountFilters()}
        <div className='show-more-btn'>
          <p>Показать еще</p>
          <i class='fa-solid fa-angle-down'></i>
        </div>
      </div>

      <div className='flowers-section'>{renderFlowers(visibleFlowers)}</div>

      <button className='awaiting-btn'>Ожидаем поступление</button>

      <div className='preOrder-section'>{renderPreOrder(flowers)}</div>

      <div className='show-all-btn'>
        <button>
          <i class='fa-solid fa-rotate-right'></i>
          <p>Показать еще</p>
        </button>
      </div>

      <div className='footer-content'>
        <h1 className='section-header'>
          Купить недорого букет роз в Воронеже с доставкой
        </h1>
        <p>
          Если возникла необходимость приобрести цветочную композицию,
          обращайтесь в наш интернет-магазин. Покупая у нас, Вы получаете
          следующие преимущества:
        </p>
        <ul>
          <li>
            Большой ассортимент цветов и дополнительных приятных сюрпризов к
            презенту, например, мягкие игрушки, гелиевые шары, конфеты.
          </li>
          <li>
            Большой ассортимент цветов и дополнительных приятных сюрпризов к
            презенту, например, мягкие игрушки, гелиевые шары, конфеты.
          </li>
          <li>
            Большой ассортимент цветов и дополнительных приятных сюрпризов к
            презенту, например, мягкие игрушки, гелиевые шары, конфеты.
          </li>
        </ul>

        <h1 className='section-subheader'>О чем говорит цвет</h1>
        <p>
          Благодаря большому цветовому разнообразию, Вы подберете любой тон
          бутонов, который, на Ваш взгляд, понравится получателю презента.
          Однако считается, что каждая расцветка несет свое символическое
          значение. Поэтому перед тем как определиться с выбором композиции,
          предлагаем ознакомиться с символикой цвета:
        </p>
        <ul>
          <li>
            Красный. Это символ любви и страсти. Обычно такой вариант принято
            дарить своим возлюбленным или очень близким людям. Уместно будет их
            преподнести маме или бабушке – в этом случае букет будет означать
            признание в бесконечном уважении.
          </li>
          <li>
            Красный. Это символ любви и страсти. Обычно такой вариант принято
            дарить своим возлюбленным или очень близким людям. Уместно будет их
            преподнести маме или бабушке – в этом случае букет будет означать
            признание в бесконечном уважении.
          </li>
          <li>
            Красный. Это символ любви и страсти. Обычно такой вариант принято
            дарить своим возлюбленным или очень близким людям. Уместно будет их
            преподнести маме или бабушке – в этом случае букет будет означать
            признание в бесконечном уважении.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CatalogFlowers;
