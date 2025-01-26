import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const HandleSubmit = () => { //確認欄位都有填寫
    if (!Date || !Category || !Amount || !TransactionType) {
      Alert.alert('error');
      return;
    }

    const entryData = {
        Dateate,
        Category,
        TransactionType,
        Amount: parseFloat(Amount),
    }

    console.log(entryData);// debug 用的，後面再移除

    navigation.navigate('HomeScreen');
};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Log in"
            onPress={() => {
              if (!username || !password) {
                alert('Please fill in both username and password.');
                return;
              }
              navigation.navigate('HomeScreen');
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Sign up"
            onPress={() => {
              if (!Account) {
                alert('Please fill in both username and password.');
                return;
              }
              navigation.navigate('SignupScreen');
            }}
          />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#a0a0a0',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default LogInScreen;
