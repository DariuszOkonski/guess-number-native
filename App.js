import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Boilerplate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
