import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Data dummy untuk daftar grup
const groupsData = [
  {
    id: '1',
    acatar: '',
    groupName: 'Grup A',
    points: '1500 Points',
    members: '10 Members',
  },
  // Tambahkan data grup lainnya di sini
];

// Komponen untuk setiap item grup
const GroupItem = ({ groupName, points, members }) => (
  <View style={styles.itemContainer}>
    <Image source={require('../../assets/images/react-logo.png')} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.groupName}>{groupName}</Text>
      <Text style={styles.groupInfo}>{points} - {members}</Text>
    </View>
    <Text style={styles.arrowIcon}>{'>'} </Text>
    {/* <Image source={require('../../assets/images/splash.png')} style={styles.arrowIcon} /> */}
  </View>
);

// Komponen utama aplikasi
const Manage = () => {
    const navigation = useNavigation();


  return (
    <View style={styles.containerindex}>
      <TouchableOpacity style={styles.buttonIndex} onPress={() => navigation.navigate('SearchPage')}>
        <Text style={styles.arrowIconindex}>{'<'} </Text>
        <Text style={styles.buttonIndexText}>Find Team</Text>
      </TouchableOpacity>
        <FlatList
        data={groupsData}
        renderItem={({ item }) => (
            <GroupItem
            avatar={item.avatar}
            groupName={item.groupName}
            points={item.points}
            members={item.members}
            />
        )}
        keyExtractor={item => item.id}
        />
        <FlatList
        data={groupsData}
        renderItem={({ item }) => (
            <GroupItem
            avatar={item.avatar}
            groupName={item.groupName}
            points={item.points}
            members={item.members}
            />
        )}
        keyExtractor={item => item.id}
        />
    </View>
  );
};

// Stylesheet untuk tampilan
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
    arrowIconindex: {
        color: '#FFF',
        fontSize: 20,
        marginRight: 5,
        fontWeight: 'bold',
    },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  groupName: {
    color: 'white',
    fontSize: 18,
  },
  groupInfo: {
    color: 'grey',
  },
  arrowIcon: {
    color: 'yellow',
    fontSize: 35,
    // width: 50,
    // height: 50,
  },
});

export default Manage;
