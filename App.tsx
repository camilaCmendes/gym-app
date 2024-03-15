import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Text, View, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Loading } from "@components/loading";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"transparent"}
          translucent
        />
        <Loading />
        {fontsLoaded ? <View /> : <Loading />}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
