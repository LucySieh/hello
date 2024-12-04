import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const AiScreen = ({ navigation }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async () => {
    const data = {
      startDate,
      endDate,
      category,
      amount,
      note,
    };

    try {
      const response = await axios.post(' ', data); // 替換為實際 API 位置
      alert('Success');
      navigation.navigate('ResponseScreen'); // ResponseScreen
    } catch (error) {
      console.error(error);
      alert('Fail');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>selectedDate：</Text>
      <View style={styles.row}>
        <Button title="Start Date" onPress={() => setShowStartPicker(true)} />
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowStartPicker(false);
              if (selectedDate) setStartDate(selectedDate);
            }}
          />
        )}
        <Text>{startDate.toLocaleDateString()}</Text>
      </View>

      <View style={styles.row}>
        <Button title="End Date" onPress={() => setShowEndPicker(true)} />
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowEndPicker(false);
              if (selectedDate) setEndDate(selectedDate);
            }}
          />
        )}
        <Text>{endDate.toLocaleDateString()}</Text>
      </View>

      <Text style={styles.label}>選取分類：</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="請選擇分類" value="" />
          <Picker.Item label="食" value="食" />
          <Picker.Item label="衣" value="衣" />
          <Picker.Item label="住" value="住" />
          <Picker.Item label="行" value="行" />
          <Picker.Item label="收入" value="收入" />
          <Picker.Item label="支出" value="支出" />
        </Picker>
      </View>

      <Text style={styles.label}>輸入金額：</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter Amount:"
      />

      <Text style={styles.label}>輸入文字：</Text>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Enter text:"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default AiScreen;
