import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/exercise";
import { History } from "@screens/history";
import { Home } from "@screens/home";
import { Profile } from "@screens/profile";

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" children={Home} />
      <Screen name="history" children={History} />
      <Screen name="profile" children={Profile} />
      <Screen name="exercise" children={Exercise} />
    </Navigator>
  );
}
