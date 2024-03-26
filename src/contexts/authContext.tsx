import { UserDTO } from "@dtos/userDTO";
import { ReactNode, createContext } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: "1",
          name: "Camila",
          email: "camila@email.com",
          avatar: "camila.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
