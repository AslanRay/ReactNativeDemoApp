// SignIn.js
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';
import { goToAuth, goHome } from '../../navigation';
import { USER_KEY } from '../../config';

export default class SignIn extends React.Component {

  state = {
    username: '', password: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = () => {
    const { username, password } = this.state
    // try {
    //    // login with provider
    //    const user = await AsyncStorage.setItem(USER_KEY, username)
    //    console.log('usuario correcto', user)
    //    goHome()
    // } catch (err) {
    //   console.log('error:', err)
    // }
    firebase.auth().signInWithEmailAndPassword(username,password)
    .then( ()=>{ goHome() } )
    .catch( function(error) {
      console.log('error:', error)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})