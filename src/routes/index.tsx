import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/authContext";

export function Routes() {
  const nativeBaseTheme = useTheme();
  const theme = DefaultTheme;
  const contextData = useContext(AuthContext);

  console.log("USUÁRIO LOGADO =>", contextData);

  theme.colors.background = nativeBaseTheme.colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
