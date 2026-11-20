import { StyleSheet, Text, View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  type DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { TESTS } from '../data/tests';

export default function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tests</Text>
        {TESTS.map((test) => (
          <DrawerItem
            key={test.id}
            label={test.name}
            onPress={() => {
              props.navigation.navigate('Main', {
                screen: 'Quiz',
                params: { testId: test.id },
              });
              props.navigation.closeDrawer();
            }}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  sectionTitle: {
    marginLeft: 16,
    marginBottom: 4,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#777',
  },
});
