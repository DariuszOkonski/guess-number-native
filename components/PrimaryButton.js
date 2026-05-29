import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log('!!! pressed');
  }

  return (
    <Pressable
      onPress={pressHandler}
      android_ripple={{ color: '#640233' }} //only android when press button
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2, // shadow only for android
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
