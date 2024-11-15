import {Login, Register, DashboardPanel} from '../pages';
interface IRoute {
  route: string;
  element: React.ComponentType;
}
export const beforeAuthRoutes = {
  login: '/',
  register: '/auth/register',
};
export const afterAuthRoutes = {
  dashboard: '/panel/dashboard',
  // profile: '/panel/profile',
  // personalDashboard: '/panel/dashboardl',
};
export const neverShowLayout = [
  beforeAuthRoutes.login,
  beforeAuthRoutes.register,
];
export const routesMapping: IRoute[] = [
  {
    route: afterAuthRoutes.dashboard,
    element: DashboardPanel,
  },
  {
    route: beforeAuthRoutes.login,
    element: Login,
  },
  {
    route: beforeAuthRoutes.register,
    element: Register,
  },
];

const alwaysShowRoutes = ['/', '/test'];

const beforeAuth = [beforeAuthRoutes.login, beforeAuthRoutes.register];

export const filterRoutesByAuthStep = (isAuth: boolean) => {
  return routesMapping.filter((item) => {
    if (!isAuth) {
      if (
        beforeAuth.includes(item.route) ||
        alwaysShowRoutes.includes(item.route)
      ) {
        return item;
      }
    } else if (
      !beforeAuth.includes(item.route) ||
      alwaysShowRoutes.includes(item.route)
    ) {
      return item;
    }
  });
};
