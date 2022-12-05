import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

// Swiper connected!
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Cart({ page }) {
  const [products] = useState([
    {
      img: '/static/media/flower4.1521968dfcd98c19d389.png',
      title: 'Букет из 15 белых роз 35-40 см (Кения) в стильной упаковке',
      articule: 'Артикул: 0092S40240',
      total: 1,
      price: '5 060 ₽',
    },
    {
      img: '/static/media/flower4.1521968dfcd98c19d389.png',
      title: 'Роза "Мондиаль" 60см 25шт с эвкалиптом',
      articule: 'Артикул: 0092S40567',
      total: 2,
      price: '4 560 ₽',
    },
    {
      img: '/static/media/flower4.1521968dfcd98c19d389.png',
      title: 'Букет роз Ред наоми 60 см',
      articule: 'Артикул: 0092S40890',
      total: 3,
      price: '6 258 ₽',
    },
  ]);


  const [ballons] = useState([
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: false
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: false
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: true
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: true
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: true
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: true
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: true
    },
    {
      ballons_image: "https://minimer07.pythonanywhere.com/media/66e83c19657d6d34d3cf966e6d7a1b2f.jpg",
      title: "Открытка «Дорогая мама»",
      price: "100 ₽",
      add: false
    },
  ])

  return (
    <div className='Cart'>
      <div className='container'>
        {page === 'category' ? null : (
          <p className='section-router'>
            <span>
              <Link to='/'>Главная</Link>
            </span>
            <span></span>
            <span className='active'>
              <Link to='/catalog'>Корзина</Link>
            </span>
          </p>
        )}

        <h1 className='cart_title'>Корзина</h1>

        <div className='cart_main'>
          <div className='cart__left'>
            <div className='items_cart'>
              <div className='items_cart__top'>
                <h3>Товары в корзине</h3>
                <span>Очистить корзину</span>
              </div>
              {products.map((item, index) => (
                <div className='item' key={index}>
                  <div className='item_photo_title'>
                    <div className='item__img'>
                      <img src={item.img} alt='' />
                    </div>
                    <div className='item_title'>
                      <h2>{item.title}</h2>
                      <p>{item.articule}</p>
                    </div>
                  </div>
                  <div className='item_total_prices'>
                    <div className='item_total'>
                      <div className='total_minus'>
                        <svg
                          width='12'
                          height='2'
                          viewBox='0 0 12 2'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11 1.75C11.4142 1.75 11.75 1.41421 11.75 1C11.75 0.585786 11.4142 0.25 11 0.25L11 1.75ZM1 0.25C0.585787 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585787 1.75 1 1.75L1 0.25ZM11 0.25L1 0.25L1 1.75L11 1.75L11 0.25Z'
                            fill='#7D818E'
                          />
                        </svg>
                      </div>
                      <div className='total_price'>
                        <span>{item.total}</span>
                      </div>
                      <div className='total_plus'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25L17 12.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L7 11.25ZM17 11.25L7 11.25L7 12.75L17 12.75L17 11.25Z'
                            fill='#7D818E'
                          />
                          <path
                            d='M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L12.75 7ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM11.25 7L11.25 17H12.75L12.75 7L11.25 7Z'
                            fill='#7D818E'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='title_price'>
                      <h2>{item.price}</h2>
                    </div>
                    <div className='close'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.96086 14.6262C7.57034 15.0167 7.57034 15.6499 7.96086 16.0404C8.35139 16.431 8.98455 16.431 9.37508 16.0404L7.96086 14.6262ZM12.7084 12.7071C13.0989 12.3166 13.0989 11.6834 12.7084 11.2929C12.3179 10.9024 11.6847 10.9024 11.2942 11.2929L12.7084 12.7071ZM11.2942 11.2929C10.9037 11.6834 10.9037 12.3166 11.2942 12.7071C11.6847 13.0976 12.3179 13.0976 12.7084 12.7071L11.2942 11.2929ZM16.0417 9.37376C16.4323 8.98324 16.4323 8.35007 16.0417 7.95955C15.6512 7.56903 15.0181 7.56903 14.6275 7.95955L16.0417 9.37376ZM12.7084 11.2929C12.3179 10.9024 11.6847 10.9024 11.2942 11.2929C10.9037 11.6834 10.9037 12.3166 11.2942 12.7071L12.7084 11.2929ZM14.6275 16.0404C15.0181 16.431 15.6512 16.431 16.0417 16.0404C16.4323 15.6499 16.4323 15.0167 16.0417 14.6262L14.6275 16.0404ZM11.2942 12.7071C11.6847 13.0976 12.3179 13.0976 12.7084 12.7071C13.0989 12.3166 13.0989 11.6834 12.7084 11.2929L11.2942 12.7071ZM9.37508 7.95955C8.98455 7.56903 8.35139 7.56903 7.96086 7.95955C7.57034 8.35007 7.57034 8.98324 7.96086 9.37376L9.37508 7.95955ZM9.37508 16.0404L12.7084 12.7071L11.2942 11.2929L7.96086 14.6262L9.37508 16.0404ZM12.7084 12.7071L16.0417 9.37376L14.6275 7.95955L11.2942 11.2929L12.7084 12.7071ZM11.2942 12.7071L14.6275 16.0404L16.0417 14.6262L12.7084 11.2929L11.2942 12.7071ZM12.7084 11.2929L9.37508 7.95955L7.96086 9.37376L11.2942 12.7071L12.7084 11.2929Z'
                          fill='#E2E4EB'
                        />
                        <rect
                          x='1'
                          y='1'
                          width='22'
                          height='22'
                          rx='11'
                          stroke='#E2E4EB'
                          strokeWidth='2'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="add__touch">
              <div className="add__touch__header">
                <h2>Добавить к заказу приятную мелочь</h2>

                <ul className="lists">
                  <li>
                    <span>Открытки</span>
                  </li>
                  <li className='active'>
                    <span>Шарики</span>
                  </li>
                  <li>
                    <span>Мишки</span>
                  </li>
                </ul>

                <div className="ballons">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    {ballons.map((item, index) => (
                      <SwiperSlide className="card__ballon" key={index}>
                        <img src={item.ballons_image} alt="" />
                        <h3>{item.title}</h3>
                        <div className="card_bottom">
                          <span>{item.price}</span>
                          {item.add ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#0093A2" />
                            <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11L17 13ZM7 11C6.44771 11 6 11.4477 6 12C6 12.5523 6.44771 13 7 13L7 11ZM17 11L7 11L7 13L17 13L17 11Z" fill="white" />
                            <path d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7L13 7ZM11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17H11ZM11 7L11 17H13L13 7L11 7Z" fill="white" />
                          </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" rx="12" fill="#E2195B" />
                              <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11L17 13ZM7 11C6.44771 11 6 11.4477 6 12C6 12.5523 6.44771 13 7 13L7 11ZM17 11L7 11L7 13L17 13L17 11Z" fill="white" />
                            </svg>

                          }
                        </div>
                      </SwiperSlide >
                    ))}
                  </Swiper>

                  <div className="ballons_comment">
                    <h4>Текст открытки</h4>
                    <textarea placeholder='Текст открытки'></textarea>

                    <div className="ballons_btns">
                      <button className="pickup">
                        Самовывоз
                      </button>
                      <button className='delivery'>Доставка</button>
                    </div>
                  </div>

                  <div className="pickup">
                    <div className="pickup_top">
                      <div className="number">
                        1
                      </div>
                      <h2>Контактные данные</h2>
                    </div>
                    <div className="pickup__form">
                      <div className="inputs">
                        <label htmlFor="name">Вашем имя*</label>
                        <input type="text" name="name" placeholder='Введите имя' />
                      </div>
                      <div className="inputs">
                        <label htmlFor="name">Ваш телефон*</label>
                        <input type="text" placeholder='+7 (___) ___-__-__' />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div className="add__touch__main">
                <div className="pickup_top">
                  <div className="number">
                    2
                  </div>
                  <h2>Детали самовывоза</h2>
                </div>
                <div className="add__touch__main_item">
                  <h3>Магазины в Воронеже</h3>
                  <div className="maps">
                    <div className="map active">
                      <div className="item"></div>
                      <span>ул. Революции 1905 года, 80</span>
                    </div>
                    <div className="map">
                      <div className="item"></div>
                      <span>ул. Владимира Невского, 17</span>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23961.11518030335!2d69.2172510182617!3d41.34932373438437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1670216130371!5m2!1suz!2s" allowfullscreen="" loading="lazy"
                    style={{ border: 0 }}
                    referrerpolicy="no-referrer-when-downgrade">

                  </iframe>
                  <h3>Время</h3>
                  <div className="dates">
                    <div className="data">
                      <label htmlFor="data">Дата</label>
                      <input type="date" name="data" id="" />
                    </div>
                    <div className="data">
                      <label htmlFor="time">Время</label>
                      <input type="time" name="time" id="" />
                    </div>
                  </div>

                  <div className="comments">
                    <label htmlFor="comment">Комментарии</label>
                    <textarea name="comment" placeholder='Текст открытки'></textarea>
                  </div>
                </div>
              </div>
              <div className="add__touch__footer">
                <div className="pickup_top">
                  <div className="number">
                    3
                  </div>
                  <h2>Способы оплаты</h2>
                </div>
                <div className="add__touch_pays">
                  <div className="pay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.99609 14.001L4.5477 9.74837C4.84136 9.25892 5.26851 8.86337 5.77904 8.6081L6.36447 8.31539C6.78121 8.10702 7.24074 7.99854 7.70667 7.99854H22.0044" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.99609 21.0038L9.76036 18.9209C10.5649 18.6302 11.2551 18.0893 11.7297 17.3776L14.7238 12.8878C15.1593 12.2348 15.0733 11.3651 14.5183 10.8101V10.8101C13.8754 10.1672 12.8331 10.1671 12.1901 10.8099L9.99859 13.0004H7.99776" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.9833 14.0011H19.6886C20.9912 13.9774 22.0282 12.9027 22.0054 11.6001V7.39831C22.0282 6.0957 20.9912 5.02098 19.6886 4.99731H12.3171C11.0145 5.02098 9.97751 6.0957 10.0004 7.39831V7.39831V13.0006" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span>Оплата при получении</span>
                    <div className="item"></div>
                  </div>
                  <div className="pay active">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12.6101H19" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.25 17.8101H6.96997" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.10938 17.8101H12.5494" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <span>Банковской картой онлайн</span>
                    <div className="item"></div>
                  </div>
                  <div className="pay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.50191 3V4.8C7.47695 5.10292 7.69945 5.36992 8.00191 5.4H12.0019C12.3044 5.36992 12.5269 5.10292 12.5019 4.8V3" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H14C15.1046 3 16 3.89543 16 5V8" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.9805 15.5C14.5325 16.0524 14.5325 16.9476 13.9805 17.5" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.9805 14C16.6435 14.6628 17.0161 15.5619 17.0162 16.4995C17.0164 17.437 16.6441 18.3362 15.9812 18.9992L15.9805 19" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="15.5" cy="16.5" r="5.5" stroke="#7D818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <span>Google Pay, Apple Pay</span>
                    <div className="item"></div>
                  </div>
                  <div className="pay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43L21.7008 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22Z" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.62109 11.27C4.87109 12.81 7.41109 13.74 10.0011 14.03" stroke="#7D818E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span>Оплата по расчетному счету</span>
                    <div className="item"></div>
                  </div>
                  <input type="number" name="" id="" placeholder='Номер карты' className='number'/>

                  <div className="duble_inputs">
                    <input type="number" name="" id="" placeholder='MM/YY' />
                    <input type="number" name="" id="" placeholder='CVV/CVC' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cart__right'>
            <div className='total'>
              <div className='total_price'>
                <h3>Итого:</h3>
                <h3>17 576 ₽</h3>
              </div>
              <ul>
                <li>
                  <h4>3 товара</h4> <span>17 976 ₽</span>
                </li>
                <li>
                  <h4>Скидка</h4> <span className='discount'>- 356 ₽</span>
                </li>
                <li>
                  <h4>Доставка</h4> <span className='free'>бесплатно</span>
                </li>
              </ul>
              <form>
                <div className='code'>
                  <input type='text' name='' id='' placeholder='Промокод' />
                  <button>
                    <svg
                      width='14'
                      height='10'
                      viewBox='0 0 14 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.8346 5.00001H1.16797'
                        stroke='#7D818E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8.66797 9.16667L12.8346 5'
                        stroke='#7D818E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8.66797 0.833344L12.8346 5.00001'
                        stroke='#7D818E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
                <button type='submit' className='submit'>
                  Оформить заказ
                </button>
              </form>
            </div>
            <div className="payment_methods">
              <h4>Способы оплаты</h4>
              <p>Вы можете оплатить <br />
                наличными или картой:</p>
              <ul className="methods">
                <li>
                  <Link>
                    <img src="/static/media/footerKoshelek.613085f72c537b0737606f4994ba149b.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/footerVisa.14df20fe68a88db692c6544d57d50cf7.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/footerMasterCard.fad9f54d95ad996d6d0f24faa1930550.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/maestro.3eb5c0dd3bc7d90145b2cfab4b8d72f2.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/footerWorld.ce83fd95d3e1c98bc80c9e1b5afc0f6f.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/footerGas.afc8f2cf620940af9f0f3950bbed00e7.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/footerOval.488d1ad7bd880b9c34f4ac48f7458cee.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/static/media/footerOval.488d1ad7bd880b9c34f4ac48f7458cee.svg" alt="" />
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>


      </div>
    </div >
  );
}

export default Cart;
