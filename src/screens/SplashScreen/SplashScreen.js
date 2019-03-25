// Initializing.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import firebase from 'firebase';


import { goToAuth, goHome } from '../../navigation'
import { USER_KEY } from '../../config'

export default class Initialising extends React.Component {

  componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyAxbSwMgo6M7Tr-1tFRbqy8oQwLWJ0AChI",
        authDomain: "basicdemoapp-f38fb.firebaseapp.com",
        databaseURL: "https://basicdemoapp-f38fb.firebaseio.com",
        projectId: "basicdemoapp-f38fb",
        storageBucket: "basicdemoapp-f38fb.appspot.com",
        messagingSenderId: "316733829048"
      }    
    );
  }

  async componentDidMount() {

    // try {
    //   const user = await AsyncStorage.getItem(USER_KEY)
    //   console.log('user: ', user)
    //   if (user) {
    //     goHome()
    //   } else {
    //     goToAuth()
    //   }
    // } catch (err) {
    //   console.log('error: ', err)
    //   goToAuth()
    // }
    firebase.auth().onAuthStateChanged((user) => {
      try {
      if (user) {
        goHome()
      } else {
        goToAuth()
      }
    } catch (err) {
      alert('error');
      console.log('error: ', err)
      goToAuth()
    }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Splash Screen . . .</Text>
        {/*<ActivityIndicator size="large" />*/}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})