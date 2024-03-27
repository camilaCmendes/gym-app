import { UserDTO } from "@dtos/userDTO";
import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "@services/api";
import { storageUserGet, storageUserSave } from "@storage/storageUser";

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);

  const singIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user) {
        setUser(data.user);
        storageUserSave(data.user);
      }
    } catch (error) {
      throw error;
    }
  };

  const loadUserData = async () => {
    const userLogged = await storageUserGet();

    if (userLogged) {
      setUser(userLogged);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
