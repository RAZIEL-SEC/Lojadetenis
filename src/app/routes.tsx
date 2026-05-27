import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Product from './pages/Product';
import MensShoes from './pages/MensShoes';
import WomensShoes from './pages/WomensShoes';
import Offers from './pages/Offers';
import Tracking from './pages/Tracking';
import MyOrders from './pages/MyOrders';
import Accessibility from './pages/Accessibility';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/pagamento',
    Component: Payment,
  },
  {
    path: '/produto/:id',
    Component: Product,
  },
  {
    path: '/tenis-masculino',
    Component: MensShoes,
  },
  {
    path: '/tenis-feminino',
    Component: WomensShoes,
  },
  {
    path: '/ofertas',
    Component: Offers,
  },
  {
    path: '/rastreamento',
    Component: Tracking,
  },
  {
    path: '/meus-pedidos',
    Component: MyOrders,
  },
  {
    path: '/acessibilidade',
    Component: Accessibility,
  },
]);
