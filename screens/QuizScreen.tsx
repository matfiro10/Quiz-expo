import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Quiz'>;

export default function QuizScreen({ route }: Props) {
  const { testId, testName, testDescription } = route.params;

  return (
    <View style={styles.container}>
      <Text>Test ID: {testId}</Text>
      <Text>Test name: {testName}</Text>
      <Text>Test description: {testDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
