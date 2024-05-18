import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CreatePaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { teamData, leaderData } = route.params;
  
  const [paymentStepCompleted, setPaymentStepCompleted] = useState(false);

  const handleContinue = () => {
      navigation.navigate('ReviewPage', {
        teamData: teamData,
        leaderData: leaderData
      });

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonIndex}>
        <Text style={styles.arrowIcon}>{'<'} </Text>
        <Text style={styles.buttonIndexText} onPress={() => navigation.navigate('LeaderPage')}>Create Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonInformation}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>1</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>2</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>3</Text>
        </View>
        <Text style={styles.buttonInformationText}>Create Paymant</Text>
        <View style={styles.iconContainerGrey}>
          <Text style={styles.iconText}>4</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>Create Payment</Text>
      <Text style={styles.infoText}>
        Create payment needed if you want to participate in the e-sport tournament, but you can also do this step later:
      </Text>
      <TouchableOpacity style={styles.buttonOutlined}>
        {/* <FontAwesomeIcon icon={faEnvelope} size={20} color="white" /> */}
        <Text style={styles.info}>Make Payment Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutlined}>
        {/* <FontAwesomeIcon icon={faClock} size={20} color="white" /> */}
        <Text style={styles.info}>Do this process later</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
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
  buttonInformation: {
    flexDirection: 'row',
    backgroundColor: '#333', // Warna latar belakang tombol
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  iconContainer: {
    backgroundColor: 'yellow', // Warna latar belakang ikon
    borderRadius: 10,
    padding: 10,
  },
  iconContainerGrey: {
    backgroundColor: 'grey', // Warna latar belakang ikon
    borderRadius: 10,
    padding: 10,
  },
  iconText: {
    color: '#333', // Warna teks ikon
    fontWeight: 'bold',
  },
  buttonInformationText: {
    color: '#FFF', // Warna teks tombol
    fontSize: 16, // Ukuran teks tombol
    // paddingRight: 10,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  info: {
    color: 'white',
  },
  stepIndicator: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  infoText: {
    color: 'gray',
    marginBottom: 20,
    fontSize: 20,
  },
  buttonOutlined: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold', 
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'yellow', 
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default CreatePaymentScreen;
