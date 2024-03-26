import { Loading } from "@components/loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Routes } from "@routes/index";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import { THEME } from "./src/theme";
import { AuthContext } from "@contexts/authContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
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
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
