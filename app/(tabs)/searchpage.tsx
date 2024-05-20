import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const FindTeam = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.containerindex}>
      <TouchableOpacity style={styles.buttonIndex} onPress={() => navigation.navigate('CreateTeam')}>
        <Text style={styles.arrowIcon}>{'<'} </Text>
        <Text style={styles.buttonIndexText}>Create Team</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.checkMark}>✓</Text>
        </View>
        <Text style={styles.successMessage}>You haven't joined any team!</Text>
        <Text style={styles.infoMessage}>
          Join the best team now to compete with others and participate in tournaments!
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Find Team</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
        <TouchableOpacity style={styles.buttonmodal} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.modalText}>Create New Team</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonmodal} onPress={() => navigation.navigate('ManagePage')}>
          <Text style={styles.modalText}>Manage Team</Text>
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
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
  footer: {
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    padding: 15,
    alignItems: 'center',
    width: '80%',
  },
  buttonmodal: {
    borderRadius: 10,
    margin: '1%',
    backgroundColor: 'grey',
    padding: 15,
    // alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#000',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  // modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
  // },
});

export default FindTeam;
