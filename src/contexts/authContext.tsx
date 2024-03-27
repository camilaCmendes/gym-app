import { UserDTO } from "@dtos/userDTO";
import { ReactNode, createContext, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: "1",
    name: "Camila",
    email: "camila@email.com",
    avatar: "camila.png",
  });

  function singIn(email: string, password: string) {
    setUser({
      id: "",
      name: "",
      email,
      avatar: "",
    });
  }

  return (
    <AuthContext.Provider value={{ user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
