import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const nativeBaseTheme = useTheme();
  const theme = DefaultTheme;
  const { user } = useAuth();

  console.log("USUÁRIO LOGADO =>", user);

  theme.colors.background = nativeBaseTheme.colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
