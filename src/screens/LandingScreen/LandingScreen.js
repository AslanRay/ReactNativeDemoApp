import React, { Component } from 'react';
import {View, StyleSheet, AsyncStorage, Alert} from 'react-native';
import {goToAuth} from '../../navigation';
import {Navigation} from 'react-native-navigation';
import {USER_KEY} from '../../config';
import PantallaLanding from '../../components/LandingScreen/LandingScreen';
import firebase from 'firebase';

class LandingScreen extends Component {

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  logout = () => {
    try {
        //await AsyncStorage.removeItem(USER_KEY)
        firebase.auth().signOut()
        goToAuth()
    } catch (err) {
        Alert.alert(err)
    }
}

  eliminarCuenta = () => {
    try {
      firebase.auth().currentUser.delete();
      // user.delete()
      // .then( () => {Alert.alert('Usuario eliminado')})
      // .catch((error) => {console.log(error)} )
      goToAuth()
  } catch (err) {
      Alert.alert(err)
  }  
  }

  navigationButtonPressed({ buttonId }) {
    switch (buttonId) {
      case 'nav_logout_btn': {
        //this.logout()
        Alert.alert(
          'Eliminar cuenta',
          'La cuenta se eliminara definitivamente',
          [
            {
            text:'Aceptar',
            onPress: this.eliminarCuenta
            },
            {
              text: 'Cancelar',
              onPress: () => {console.log('Cancelado')},
              style: 'cancel'
            }
        ],
        {cancelable:false},
        );
        break;
      }
      default:
        break;
    }
  }

    render() {
        return (
            <View style={styles.container}>
                <PantallaLanding></PantallaLanding>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });

export default LandingScreen;