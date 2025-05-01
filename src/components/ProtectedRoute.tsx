
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type UserRole = 'user' | 'admin';
type RestaurantType = 'spoon' | 'zaika' | null;

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  requiredRestaurant?: RestaurantType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole,
  requiredRestaurant
}) => {
  const { isAuthenticated, isAdmin, restaurantType } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole === 'admin' && !isAdmin) {
    return <Navigate to="/" />;
  }

  // Check if admin has access to the specific restaurant
  if (isAdmin && requiredRestaurant && restaurantType !== requiredRestaurant) {
    return <Navigate to="/admin" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
