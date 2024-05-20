import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity ,StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

const TeamInfoForm = () => {
  const [teamLogo, setTeamLogo] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [selectedGame, setSelectedGame] = useState('game1');
  const [members, setMembers] = useState('');
  const [tagline, setTagline] = useState('');
  const navigation = useNavigation();

  // Fungsi untuk menangani pengunggahan logo tim
  const handleLogoUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setTeamLogo(result.uri);
    }
  };

  // Fungsi untuk menangani pindah ke halaman berikutnya
  const handleContinue = () => {
    if (teamName && teamCode && selectedGame && members && tagline) {
      // Logika untuk navigasi
      navigation.navigate('LeaderPage', {
        teamData: {
          teamName,
          teamCode,
          selectedGame,
          members,
          tagline
        }
      });
    } else {
      Alert.alert('Error', 'Semua bidang harus diisi.');
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonIndex}>
        <Text style={styles.arrowIcon}>{'<'} </Text>
        <Text style={styles.buttonIndexText} onPress={() => navigation.navigate('Home')}>Team Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonInformation}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>1</Text>
        </View>
        <Text style={styles.buttonInformationText}>Team Information</Text>
        <View style={styles.iconContainerGrey}>
          <Text style={styles.iconText}>2</Text>
        </View>
        <View style={styles.iconContainerGrey}>
          <Text style={styles.iconText}>3</Text>
        </View>
        <View style={styles.iconContainerGrey}>
          <Text style={styles.iconText}>4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogoUpload} style={styles.logoUpload}>
        {teamLogo ? (
          <Image source={{ uri: teamLogo }} style={styles.logo} />
        ) :(
          <Text style={styles.uploadIconText}>team logo</Text>
        )}
      </TouchableOpacity>
          <View style={styles.uploadIconContainer}>
            <Text style={styles.uploadIconText}>Upload team logo</Text>
            <Text style={styles.uploadIconSubtext}>(Max: 10MB) with png, jpg, jpeg</Text>
          </View>
      
      <Text style={styles.textinput}>Team Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Input team name ..."
        value={teamName}
        onChangeText={setTeamName}
      />
      <Text style={styles.textinput}>Create Team Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Input team code ..."
        value={teamCode}
        onChangeText={setTeamCode}
      />
      <Text style={styles.descripinput}>max: 3-8 characters make uniqe code 
      based on your team name, ex: RRQ, EVOS, BTR
      </Text>
      <Text style={styles.textinput}>Games played</Text>
      <Picker
        selectedValue={selectedGame}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedGame(itemValue)}
      >
        <Picker.Item label="Select games" value="Indeks" />
        <Picker.Item label="Mobile Legend" value="Mobile Legend" />
        <Picker.Item label="PUBG" value="PUBG" />
      </Picker>
      <Text style={styles.textinput}>Number of members</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMembers}
        value={members}
        placeholder="Input total member"
        keyboardType="numeric"
      />
      <Text style={styles.textinput}>Team tagline</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTagline}
        value={tagline}
        placeholder="Input team tagline..."
      />
      <Text style={styles.descripinput}>Create catchy tagline that makes
      everyone easy to remember it, ex: "Unleash your gaming potential with U2Play"
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: '10%',
  },
  logoUpload: {
    marginBottom: 20,
    marginLeft: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  uploadIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  uploadIconText: {
    fontSize: 16,
    color: '#fff',
  },
  uploadIconSubtext: {
    fontSize: 12,
    color: '#aaa',
  },
  picker: {
    backgroundColor: 'gray',
    marginBottom: 15,
    borderRadius: 10,
    color: 'white',
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
  textinput: {
    fontSize: 15,
    paddingBottom: 5,
    color: '#FFFFFF',
  },
  descripinput: {
    paddingBottom: 15,
    color: 'gray',
    fontSize: 15,

  }
});

export default TeamInfoForm;
