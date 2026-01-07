import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#3A4F4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#EDEFEE',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
