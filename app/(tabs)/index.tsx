import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import WelcomeScreen from './WelcomeScreen';

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
        <WelcomeScreen />
      </View>
      <AppFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
