export default interface UserProps {
  id: number;
  name: string;
  email: string;
}
export interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated?: boolean;
  route: string;
  path?: string;
}
