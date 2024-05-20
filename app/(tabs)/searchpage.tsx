import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const FindTeam = () => {
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.containerindex}>
      <TouchableOpacity style={styles.buttonIndex}>
        <Text style={styles.arrowIcon}>{'<'} </Text>
        <Text style={styles.buttonIndexText}>Create Team</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.circle}>
          {/* Anda bisa menggunakan gambar atau SVG untuk ikon centang */}
          <Text style={styles.checkMark}>✓</Text>
        </View>
        <Text style={styles.successMessage}>You heaven't join to any team!</Text>
        <Text style={styles.infoMessage}>
          Join best the team now to compete others and participate in tournaments!
        </Text>
        <Button style={styles.button} title='Find Team' onPress={toggleModal}></Button>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Ini adalah konten pop-up!</Text>
          <Button title="Tutup" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  containerindex: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
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
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default FindTeam;
