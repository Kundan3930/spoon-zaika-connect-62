
import React, { createContext, useState, useContext, useEffect } from 'react';

type UserRole = 'user' | 'admin';
type RestaurantType = 'spoon' | 'zaika' | null;

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  restaurant?: RestaurantType; // Restaurant type for admins
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  restaurantType: RestaurantType;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  restaurantType: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check localStorage for user data
    const storedUser = localStorage.getItem('quickbite_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('quickbite_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: AuthUser) => {
    setUser(userData);
    localStorage.setItem('quickbite_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('quickbite_user');
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';
  const restaurantType = user?.restaurant || null;

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isAdmin, 
      restaurantType,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
