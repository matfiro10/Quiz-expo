import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TESTS, type TestSummary } from '../data/tests';
import type { HomeNavigation } from '../navigation/types';

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();
  const insets = useSafeAreaInsets();

  const renderItem = ({ item: test }: { item: TestSummary }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Quiz', { testId: test.id, testName: test.name, testDescription: test.description })}
    >
      <Text style={styles.title}>{test.name}</Text>
      <Text style={styles.description}>{test.description}</Text>
      <Text style={styles.tasks}>Tasks: {test.numberOfTasks}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={TESTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
        contentContainerStyle={styles.list}
      />

      <View style={[styles.footer, { paddingBottom: 18 + insets.bottom }]}>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('Results')}
        >
          <Text style={styles.footerButtonText}>Results</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  tasks: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  footer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerButton: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#222',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
