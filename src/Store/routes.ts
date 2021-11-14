import { lazy } from 'solid-js';
import { TNavigation } from './navigation-bar-store';

const Docs = lazy(() => import('../Pages/Docs/index'));
const Home = lazy(() => import('../Pages/Home/index'));
const Playground = lazy(() => import('../Pages/Playground/index'));

export const routes: TNavigation[] = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'Documentation',
    path: '/docs',
    component: Docs,
  },
  {
    label: 'API Playground',
    path: '/playground',
    component: Playground,
  },
];
