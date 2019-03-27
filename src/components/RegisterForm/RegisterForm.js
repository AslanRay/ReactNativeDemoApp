import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';


const registerForm = () => {

    return(
        <View style={styles.regForm}>
            <Text style={styles.header}>Formulario basico</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder="Nombre"
            />
            <TextInput style={styles.textInput} placeholder="Apellido"/>
        </View>
    );
};

const styles = StyleSheet.create({
    regForm: {
        alignSelf:'stretch'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#59cbbd',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#199187',
        borderBottomWidth:1
    },
    textInput: {
        alignSelf:'stretch',
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        color: '#199187',
        marginBottom:30,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1       
    }
  });

export default registerForm;