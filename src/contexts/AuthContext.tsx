
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authService, AuthUser } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signUp: (email: string, password: string, username: string, phone: string) => Promise<void>;
  signIn: (emailOrPhone: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
    });

    const { data: { subscription } } = authService.onAuthStateChange((user) => {
      setUser(user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, username: string, phone: string) => {
    await authService.signUp(email, password, username, phone);
    const user = await authService.getCurrentUser();
    setUser(user);
    navigate('/dashboard');
  };

  const signIn = async (emailOrPhone: string, password: string) => {
    await authService.signIn(emailOrPhone, password);
    const user = await authService.getCurrentUser();
    setUser(user);
    navigate('/dashboard');
  };

  const signOut = async () => {
    await authService.signOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}