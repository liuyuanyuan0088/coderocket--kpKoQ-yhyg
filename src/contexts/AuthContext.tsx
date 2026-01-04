import React, { createContext, useContext, useState, useEffect } from 'react';
interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ADMIN_PASSWORD = 'admin123';
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('adminAuth') === 'true';
  });
  useEffect(() => {
    localStorage.setItem('adminAuth', isAuthenticated.toString());
  }, [isAuthenticated]);
  const login = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}