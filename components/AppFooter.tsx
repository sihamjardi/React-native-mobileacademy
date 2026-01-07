import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2026 Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#3A4F4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#EDEFEE',
    fontSize: 14,
  },
});
