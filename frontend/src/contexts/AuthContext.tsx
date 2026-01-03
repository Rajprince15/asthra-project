import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  role: 'centre' | 'patient';
  centreId?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for authentication
export const mockCentres = [
  { centre_id: 'CENTRE001', password: 'centre123' },
  { centre_id: 'CENTRE002', password: 'centre456' },
];

export const mockPatients = [
  { 
    patient_id: 'PAT001', 
    centre_id: 'CENTRE001', 
    phone: '1234567890', 
    email: 'patient1@test.com', 
    password: 'patient123' 
  },
  { 
    patient_id: 'PAT002', 
    centre_id: 'CENTRE001', 
    phone: '9876543210', 
    email: 'patient2@test.com', 
    password: 'patient123' 
  },
  { 
    patient_id: 'PAT003', 
    centre_id: 'CENTRE002', 
    phone: '5555555555', 
    email: 'patient3@test.com', 
    password: 'patient123' 
  },
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('authUser');
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
