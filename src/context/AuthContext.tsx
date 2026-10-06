import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

type AuthContextType = {
  signIn: (phoneNumber: string) => Promise<void>;
  signOut: () => Promise<void>;
  session: string | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be wrapped in a <SessionProvider />');
  }
  return value;
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    // Attempt to load the session token on initial render
    const loadSession = async () => {
      try {
        let storedSession = null;
        if (Platform.OS === 'web') {
          storedSession = localStorage.getItem('userToken');
        } else {
          storedSession = await SecureStore.getItemAsync('userToken');
        }
        
        if (storedSession) {
          setSession(storedSession);
        }
      } catch (e) {
        console.error('Failed to load session token', e);
      } finally {
        setIsLoading(false);
      }
    };

    loadSession();
  }, []);

  const signIn = async (phoneNumber: string) => {
    setIsLoading(true);
    // Mock API call
    setTimeout(async () => {
      try {
        const token = 'mock-token-' + phoneNumber;
        if (Platform.OS === 'web') {
          localStorage.setItem('userToken', token);
        } else {
          await SecureStore.setItemAsync('userToken', token);
        }
        setSession(token);
      } catch (e) {
        console.error('Failed to save session token', e);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      if (Platform.OS === 'web') {
        localStorage.removeItem('userToken');
      } else {
        await SecureStore.deleteItemAsync('userToken');
      }
      setSession(null);
    } catch (e) {
      console.error('Failed to delete session token', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
