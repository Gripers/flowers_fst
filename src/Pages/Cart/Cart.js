import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.scss';
import { useCart } from 'react-use-cart';
import Cookies from 'universal-cookie';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useCreateOrderMutation } from '../../redux/api/order.api';

function Cart({ page }) {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const { items, removeItem, emptyCart, updateItemQuantity } = useCart();
  const cookies = new Cookies();
  const navigate = useNavigate();

  let total = 0;

  const orderReq = (event) => {
    event.preventDefault();

    const data = {
      orderitem: items.map((item) => {
        return {
          product: item.id,
          count: item.quantity,
        };
      }),
    };

    createOrder({ data: data, token: cookies.get('access') })
      .unwrap()
      .then(() => {
        alert('Благодарим за покупку');
        emptyCart();
        navigate('/');
      })
      .catch(() => alert('Повторите попытку позже'));
  };

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
                <span onClick={() => emptyCart()}>Очистить корзину</span>
              </div>
              {items.map((item, index) => {
                const priceCount = item.quantity * item.price;
                total += priceCount;

                return (
                  <div className='item' key={index}>
                    <div className='item_photo_title'>
                      <div className='item__img'>
                        <img src={item.product_image1} alt='' />
                      </div>
                      <div className='item_title'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className='item_total_prices'>
                      <div className='item_total'>
                        <div
                          className='total_minus'
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
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
                          <span>{item.quantity}</span>
                        </div>
                        <div
                          className='total_plus'
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
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
                        <h2>{priceCount} ₽</h2>
                      </div>
                      <div
                        className='close'
                        onClick={() => removeItem(item.id)}
                      >
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
                );
              })}
            </div>
          </div>
          <div className='cart__right'>
            <div className='total'>
              <div className='total_price'>
                <h3>Итого:</h3>
                <h3>{total} ₽</h3>
              </div>
              <form onSubmit={orderReq}>
                <button type='submit' className='submit'>
                  {isLoading ? '...' : 'Оформить заказ'}
                </button>
              </form>
            </div>
            <div className='payment_methods'>
              <h4>Способы оплаты</h4>
              <p>
                Вы можете оплатить <br />
                наличными или картой:
              </p>
              <ul className='methods'>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerKoshelek.613085f72c537b0737606f4994ba149b.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerVisa.14df20fe68a88db692c6544d57d50cf7.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerMasterCard.fad9f54d95ad996d6d0f24faa1930550.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/maestro.3eb5c0dd3bc7d90145b2cfab4b8d72f2.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerWorld.ce83fd95d3e1c98bc80c9e1b5afc0f6f.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerGas.afc8f2cf620940af9f0f3950bbed00e7.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerOval.488d1ad7bd880b9c34f4ac48f7458cee.svg'
                      alt=''
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src='/static/media/footerOval.488d1ad7bd880b9c34f4ac48f7458cee.svg'
                      alt=''
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
