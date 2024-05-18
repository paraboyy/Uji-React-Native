import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {/* Anda bisa menggunakan gambar atau SVG untuk ikon centang */}
        <Text style={styles.checkMark}>✓</Text>
      </View>
      <Text style={styles.successMessage}>Team Data Submitted!</Text>
      <Text style={styles.infoMessage}>
        Our team will check your team data for verification process, we will notify you as soon as possible.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    fontSize: 80,
    color: 'green',
  },
  successMessage: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  infoMessage: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'yellow', 
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

export default SuccessScreen;
