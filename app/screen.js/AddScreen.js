import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    if (!date || !category || !amount || !transactionType) {
      Alert.alert('Error');
      return;
    }

    const entryData = {
      date,
      category,
      transactionType,
      amount: parseFloat(amount),
    };

    console.log(entryData); // Debug 用
    Alert.alert('Success');
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>新增記錄</Text>

      <Text style={styles.label}>日期</Text>
      <View style={styles.row}>
        <Button title="select date" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate.toLocaleDateString());
            }}
          />
        )}
        <Text style={styles.dateText}>{date}</Text>
      </View>

      <Text style={styles.label}>分類</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="category" value="category" />
          <Picker.Item label="食" value="食" />
          <Picker.Item label="衣" value="衣" />
          <Picker.Item label="住" value="住" />
          <Picker.Item label="行" value="行" />
          <Picker.Item label="收入" value="收入" />
          <Picker.Item label="支出" value="支出" />
        </Picker>
      </View>

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
      />

      <Text style={styles.label}>transactionType</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={transactionType}
          onValueChange={(itemValue) => setTransactionType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="income" value="income" />
          <Picker.Item label="expense" value="expense" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="add" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default AddScreen;
