// SignUp.js
import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import { goToAuth, goHome } from '../../navigation'

export default class SignUp extends React.Component {


  state = {
    username: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = () => {
    const { username, password} = this.state
    try {
      // Logica para crear usuario en firebase
      firebase.auth().createUserWithEmailAndPassword(username,password)
      .then( ()=>{ goHome() } )
      .catch( function(error) {
        console.log('datos incorrectos: ', error)
      })
      console.log('usuario correcto!: ', success)
    } catch (error) {
      console.log('datos incorrectos: ', error)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})