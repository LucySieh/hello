import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResponseScreen = ({ route, navigation }) => {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.responseBox}>
        <Text>{message}</Text>
      </View>

      <Button title="Return" onPress={() => { navigation.navigate('HomeScreen') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
  },
  responseBox: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
});

export default ResponseScreen;