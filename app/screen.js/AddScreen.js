import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Picker, TouchableOpacity } from 'react-native';


export default function AddScreen ({ navigation })  {
    const [Date, setDate] = useState('');
    const [Category, setCategory] = useState('');
    const [Amount, setAmount] = useState('');
    const [TransactionType, setTranscationType] = ('');

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

        navigation.navigate('');
    };

    return (
        <View style={styles.container}>

            <View Style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Image
                        source={require('.assets/images/back_button.jpeg')}
                        style={{ width: 10, height: 10 }} />
                </TouchableOpacity>

                <Text style={styles.title}>Add</Text>
            </View>

            <View>
                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.input}
                    value={Date}
                    onChangeText={setDate} />

                <Text style={styles.label}>Category</Text>
                    <View style={styles.dropdownContainer}>
                        <Picker
                            selectedValue={Category}
                            onValueChange={() => setCategory()}>
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
                    value={Amount}
                    onChangeText={setAmount} />
            </View>
        </View>
    );
};