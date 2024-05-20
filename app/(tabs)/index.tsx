import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SearchPage')} style={styles.buttonIndex}>
        <Text style={styles.arrowIcon}>{'<'} </Text>
        <Text style={styles.buttonIndexText}>Create Team</Text>
      </TouchableOpacity>
      <ImageBackground
        source={require('../../assets/images/esport.jpg')} // Ganti dengan path gambar latar belakang yang sesuai
        style={styles.backgroundImage}
        >
        <View style={styles.overlay}>
          <Text style={styles.header}>Create Your Dream E-Sport Team at U2P2Play</Text>
        </View>
      </ImageBackground>      
      <View style={styles.container}>
        <Text style={styles.simpleText}>One step closer to become e-sport players, here step by step you need to do
        before create your team:.</Text>
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>1. Team Name</Text>
          <Text style={styles.stepTitle}>2. Team Leader Information</Text>
          <Text style={styles.stepTitle}>3. Create payment (Optional), if you would</Text>
          <Text style={styles.stepTitle}>4. Team Verification, once your team</Text>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAgree(!agree)}
        >
          {agree && <View style={styles.checkedCheckbox} />}
        </TouchableOpacity>
        <Text style={styles.label}>
          Saya setuju dengan syarat & ketentuan dan kebijakan privasi U2Play.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: agree ? '#FFD700' : '#E0E0E0' }]}
        onPress={() => {
          if (agree) {
            navigation.navigate('Explore');
          } else {
            // Tampilkan pesan error atau peringatan
          }
        }}
        disabled={!agree}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  header: {
    color: '#FFD700',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '30%',
  },
  stepContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  simpleText: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: '-50%',
  },
  stepTitle: {
    color: '#FFFFFF', // White color for step titles
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD700', // Yellow color for button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121212', // Dark text color for button text
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    color: '#FFFFFF', // White color for terms text
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover', // Atau 'contain' tergantung pada kebutuhan Anda
  },
  buttonIndexText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20, 
  },
  buttonIndex: {
    flexDirection: 'row',
    padding: '5%',
    paddingTop: '10%',

  },
  arrowIcon: {
    color: '#FFF', 
    fontSize: 20, 
    marginRight: 5, 
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay dengan opasitas untuk meningkatkan kontras teks
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 16,
  },
});

export default App;
