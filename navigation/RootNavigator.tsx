import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { HomeStackParamList, RootDrawerParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';

type TempStackParamList = HomeStackParamList & Pick<RootDrawerParamList, 'Results'>;

const Stack = createNativeStackNavigator<TempStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Quiz' }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Test' }}
      />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{ title: 'Results' }}
      />
    </Stack.Navigator>
  );
}
