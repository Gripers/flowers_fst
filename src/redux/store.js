import { configureStore } from '@reduxjs/toolkit';
import StringMiddleWare from '../Middlewares/StringMiddlewares';

//Reducers
import flowers from '../Components/CatalogFlowers/flowers_slice';
import filter from '../Components/CataogFilters/filters_slice';
import singleFlower from '../Components/FlowerCard/singleFlower_slice';
import reviews from '../Components/ReviewOwlCarousel/review_slice';
import employeesSlice from '../Pages/AboutUs/employeesSlice';
import globalSlice from './reducers/globalSlice';
import { authApi } from './api/auth.api';
import userSlice from './reducers/userSlice';
import { userApi } from './api/user.api';
import { orderApi } from './api/order.api';

const store = configureStore({
  reducer: {
    filter,
    flowers,
    singleFlower,
    reviews,
    employees: employeesSlice,
    global: globalSlice,
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      StringMiddleWare,
      authApi.middleware,
      userApi.middleware,
      orderApi.middleware
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
