import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container} indicatorStyle="white">
      <Text style={styles.text}>
        Bienvenue dans l’application Mobile Academy.

        {'\n\n'}Ce texte d’accueil est volontairement long pour illustrer un cas réel.
        L’objectif est de permettre à l’utilisateur de faire défiler pour lire
        l’ensemble du message.

        {'\n\n'}Ajoute plusieurs phrases de description, de contexte et de consignes
        afin que la hauteur totale dépasse la taille de l’écran.

        {'\n\n'}Plus le texte est long, plus l’effet de défilement sera visible sur
        l’émulateur ou le smartphone réel.

        {'\n\n'}Fais défiler pour t’assurer que tout est bien accessible jusqu’à la fin.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 40,
    fontSize: 50,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
