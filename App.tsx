import { Loading } from "@components/loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { StatusBar, View } from "react-native";
import { THEME } from "./src/theme";
import { SignIn } from "@screens/signin";
import { SignUp } from "@screens/signup";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}
