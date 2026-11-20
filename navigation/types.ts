import type {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

// Screens reachable one after another, with a back button between them.
export type HomeStackParamList = {
  Home: undefined;
  Quiz: { testId: string };
};

// Top-level sections, reachable from the drawer.
export type RootDrawerParamList = {
  Main: NavigatorScreenParams<HomeStackParamList>;
  Results: undefined;
};

// For screens inside the stack: they reach their own routes (Quiz)
// and the drawer's routes (Results), so one type covers both levels.
export type HomeNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList, 'Home'>,
  DrawerNavigationProp<RootDrawerParamList>
>;

// Types useNavigation() for the top-level routes everywhere.
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
