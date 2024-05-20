import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ReviewDataScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { teamData, leaderData } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentPage')} style={styles.buttonIndex}>
        <Text style={styles.arrowIcon}>{'<'} </Text>
        <Text style={styles.buttonIndexText}>Create Payment</Text>
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
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>4</Text>
        </View>
        <Text style={styles.buttonInformationText}>Review Information</Text>
      </TouchableOpacity>
      <Text style={styles.textinformation}>Review Information</Text>
      <Text style={styles.infoText}>
        Double check your information, because the data will affect your verification process.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Team Information</Text>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Team Name</Text>
          <Text style={styles.dataValue}>{teamData.teamName}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Team Code</Text>
          <Text style={styles.dataValue}>{teamData.teamCode}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Games Played</Text>
          <Text style={styles.dataValue}>{teamData.selectedGame}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Team Tagline</Text>
          <Text style={styles.dataValue}>{teamData.tagline}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leader Information</Text>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Leader Name</Text>
          <Text style={styles.dataValue}>{leaderData.leaderName}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Email</Text>
          <Text style={styles.dataValue}>{leaderData.emailLeader}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Phone Number</Text>
          <Text style={styles.dataValue}>0{leaderData.phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SuccesPage')}>
        <Text style={styles.buttonText}>Submit</Text>
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
  iconText: {
    color: '#333', // Warna teks ikon
    fontWeight: 'bold',
  },
  buttonInformationText: {
    color: '#FFF', // Warna teks tombol
    fontSize: 16, // Ukuran teks tombol
  },
  textinformation: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: '10%',
  },
  stepIndicator: {
    color: 'yellow',
    fontSize: 16,
    marginVertical: 10,
  },
  infoText: {
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: '3%',
    borderRadius: 10,
  },
  sectionTitle: {
    color: 'yellow',
    fontSize: 18,
    marginBottom: 10,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dataLabel: {
    color: 'white',
    fontSize: 16,
  },
  dataValue: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'yellow', 
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

export default ReviewDataScreen;
