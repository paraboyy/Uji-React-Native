import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const LeaderInformation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { teamData } = route.params;

  const [leaderName, setLeaderName] = useState('');
  const [emailLeader, setEmailLeader] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (leaderName && emailLeader && phoneNumber) {
      navigation.navigate('PaymentPage', {
        teamData: teamData,
        leaderData: {
            leaderName,
            emailLeader,
            phoneNumber
        }
      });
    } else {
      Alert.alert('Error', 'Semua bidang harus diisi.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')} style={styles.buttonIndex}>
          <Text style={styles.arrowIcon}>{'<'} </Text>
          <Text style={styles.buttonIndexText}>Leader Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInformation}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>1</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>2</Text>
          </View>
          <Text style={styles.buttonInformationText}>Leader Information</Text>
          <View style={styles.iconContainerGrey}>
            <Text style={styles.iconText}>3</Text>
          </View>
          <View style={styles.iconContainerGrey}>
            <Text style={styles.iconText}>4</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textinput}>Leader Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Input leader name ..."
          value={leaderName}
          onChangeText={setLeaderName}
        />
        <Text style={styles.textinput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Input leader email ..."
          value={emailLeader}
          onChangeText={setEmailLeader}
        />
        <Text style={styles.textinput}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Image
              source={require('../../assets/images/icon.png')}
              style={styles.flagIcon}
          />
          <Text style={styles.countryCode}>+62</Text>
          <TextInput
              style={styles.telpon}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100, // memberikan ruang untuk tombol di footer
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
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  iconContainer: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 10,
  },
  iconContainerGrey: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  iconText: {
    color: '#333',
    fontWeight: 'bold',
  },
  buttonInformationText: {
    color: '#FFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFD700', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textinput: {
    fontSize: 15,
    paddingBottom: 5,
    color: '#FFFFFF',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    color: '#ffff',
    backgroundColor: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  countryCode: {
    color: 'black',
    marginRight: 10,
  },
  telpon: {
    flex: 1,
    color: 'white',
    padding: 15,
  },
});

export default LeaderInformation;
