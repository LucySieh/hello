import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default HomeScreen = ({ navigation }) => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const totalAssets = income - expenses;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(''); // 替換為實際 API
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setIncome(data.income || 0);
        setExpenses(data.expenses || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('AddScreen')}>
          <Image
            source={require('./assets/images/add_button.jpeg')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Home</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AiScreen')}>
          <Image
            source={require('./assets/images/ai_analysis.jpeg')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Income: ${income}</Text>
        <Text style={styles.text}>Expenses: ${expenses}</Text>
      </View>

      <View style={styles.assetsContainer}>
        <Text style={styles.text}>Total Assets: ${totalAssets}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  assetsContainer: {
    padding: 15,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});
