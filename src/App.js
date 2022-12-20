import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';

import { getUserProfile } from './redux/reducers/userSlice';
import './App.scss';
import './Style/GlobalStyles.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import Catalog from './Pages/Catalog/Catalog';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Categories from './Pages/Categories/Categories';
import Flower from './Pages/Flower/Flower';
import AboutUs from './Pages/AboutUs/AboutUs';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Order/Order';
import Addresses from './Pages/Personal/Addresses/Addresses';
import Orders from './Pages/Personal/Orders/Orders';
import Discounts from './Pages/Personal/Discounts/Discounts';
import Settings from './Pages/Personal/Settings/Settings';
import LoginModal from './Components/Modals/LoginModal/LoginModal';
import RegisterModal from './Components/Modals/RegisterModal/RegisterModal';
import Cart from './Pages/Cart/Cart';

function App() {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get('access')) {
      dispatch(
        getUserProfile({
          id: jwtDecode(cookies.get('access')).user_id,
          token: cookies.get('access'),
        })
      );
    } else {
      return null;
    }
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/flower/:id' element={<Flower />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/order' element={<Order />} />
        {cookies.get('access') ? (
          <>
            <Route path='/addresses' element={<Addresses />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/about-discounts' element={<Discounts />} />
            <Route path='/settings' element={<Settings />} />
          </>
        ) : null}
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <LoginModal />
      <RegisterModal />

      <Footer />
    </div>
  );
}

export default App;
