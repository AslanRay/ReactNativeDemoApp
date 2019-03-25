import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const landingScreen = () => {
    return(
        <View>
            <Text style={styles.header}>Cabecera del landing screen</Text>
            <Text style={styles.paragraph}>
            Ejemplo de un parrafo
            <Text style={styles.subtext}> Subtexto al final del parrafo</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
      color: 'blue',
      marginBottom: 5,
    },
    subtext: {
      fontSize: 12,
      textAlign: 'center',
      color: 'red',
      marginBottom: 5,
    }
  });

export default landingScreen;