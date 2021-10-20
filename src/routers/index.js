import Page404 from '../pages/404'
import Loadable from 'react-loadable'
import loading from '../components/loading'
import Page from './page.js'
const routes = [
  {
    path: "/",
    exact: true,
    check_login: true,
    component: Loadable({
      loader: () =>
        import('@pages/home/index'),
      loading,
    })
  },
  {
    path: "/home",
    exact: true,
    check_login: true,
    component: Loadable({
      loader: () =>
        import('@pages/home/index'),
      loading,
    })
  },
  ...Page,
  {
    check_login: false,
    component: Page404
  }];
  export default routes