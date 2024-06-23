import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/exercise";
import { History } from "@screens/history";
import { Home } from "@screens/home";
import { Profile } from "@screens/profile";
import { House, ClockCounterClockwise, UserCircle } from "@assets/index";
import { useTheme } from "native-base";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: { exerciseId: string };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
  const theme = useTheme();
  const iconSize = theme.sizes[6];

  const activeColor = theme.colors.green[500];
  const inativeColor = theme.colors.gray[200];
  const tabBackgroundColor = theme.colors.gray[600];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inativeColor,
        tabBarStyle: {
          backgroundColor: tabBackgroundColor,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: theme.sizes[10],
          paddingTop: theme.sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House width={iconSize} height={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <ClockCounterClockwise
              width={iconSize}
              height={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <UserCircle width={iconSize} height={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
