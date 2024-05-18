import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ReviewDataScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { teamData, leaderData } = route.params;

    const { teamName, teamCode, selectedGame, tagline } = teamData;
    const { leaderName, emailLeader, phoneNumber } = leaderData;
  
  return (
    <View style={styles.container}>
      {/* ... */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Team Information</Text>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Team Name</Text>
          <Text style={styles.dataValue}>{teamName}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Team Code</Text>
          <Text style={styles.dataValue}>{teamCode}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Games Played</Text>
          <Text style={styles.dataValue}>{selectedGame}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Team Tagline</Text>
          <Text style={styles.dataValue}>{tagline}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leader Information</Text>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Leader Name</Text>
          <Text style={styles.dataValue}>{leaderName}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Email</Text>
          <Text style={styles.dataValue}>{emailLeader}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Phone Number</Text>
          <Text style={styles.dataValue}>{phoneNumber}</Text>
        </View>
      </View>
      {/* ... */}
    </View>
  );
};


export default ReviewDataScreen;
