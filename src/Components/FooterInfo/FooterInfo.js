import { Link } from "react-router-dom";
import "./FooterInfo.scss";

const FooterInfo = () => {

const piece = [
    "Розы поштучно",
    "Кустовая роза",
    "Пионовидная роза",
    "Хризантемы поштучно",
    "Альстромерия",
    "Тюльпаны",
    "Герберы поштучно",
    "Лилии поштучно",
    "Пионы",
    "Эустома",
    "Каллы поштучно",
    "Маттиола"
]

const roses = [
    "Голландские розы",
    "Местная роза",
    "Кустовые розы",
    "Пионовидные розы",
    "Букет из 101 розы"
]

const bouqets = [
    "Сборные букеты",
    "Букеты из хризантем",
    "Букеты из Альстромерий",
    "Букеты из Альстромерий",
    "Букеты Гипсофилы",
    "Букеты из гербер",
    "Букеты из пионов",
    "Букеты из тюльпанов"
]

const compositions = [
    "Ящики с цветами",
    "Коробки с цветами",
    "Корзины с цветами"
]

const prize = [
    "Мягкие игрушки",
    "Коробки конфет"
]

const schar = [
    "Шары в виде цифр",
    "Фольгированные шары",
    "Латексные шары"
]

const info = [
    "Доставка",
    "Оплата",
    "Отзывы",
    "Блог",
    "Гарантии",
    "Вопрос и ответ",
    "Корпоративным клиентам",
    "О компании",
    "Контакты"
]

const coordinat = [
    {
        location: "Служба Доставки",
        phone: "+7 (920) 211-49-03"
    },
    {
        location: "Ул. Вл. Невского 17",
        phone: "+7 (920) 211-49-03"
    },
    {
        location: "Ул. Революции 1905 года 80",
        phone: "+7 (906) 678-65-99"
    },
    {
        location: "E-mail:",
        phone: "info@lavkaroz.ru"
    }

]

    return (
        <div className="links">
                <div className="coordinat">
                    <strong className="footer__title">Наши координаты</strong>
                    {coordinat.map(coor => {
                        return (
                           <>
                            <span>{coor.location}</span>
                            {/* eslint-disable-next-line */}
                            <a className="footer__link footer__link-phone" href="#" target="_blank">{coor.phone}</a>
                           </>
                        )
                    })}
                </div>
        </div>
    )
}

export default FooterInfo;