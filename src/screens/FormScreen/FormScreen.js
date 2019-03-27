import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Text,Alert,AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker';
import PantallaForm from '../../components/RegisterForm/RegisterForm';
import {goToAuth} from '../../navigation';
import {USER_KEY} from '../../config';
import {Navigation} from 'react-native-navigation';


class FormScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            date_in: '2019-03-15',
            date_out: '2100-12-31',
        };
    }

    
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  logout = async () => {
    try {
        await AsyncStorage.removeItem(USER_KEY)
        goToAuth()
    } catch (err) {
        Alert.alert(err)
    }
}

eliminarCuenta = () => {
  try {
    firebase.auth().currentUser.delete();
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

    enviado = () => {
        alert('Datos enviados ');
    }

    render() {
        return (
            <View style={styles.container}>
                <PantallaForm></PantallaForm>
                <Text style={styles.textInput}>Fecha de nacimiento</Text>
                <DatePicker
        style ={{padding:10}}
        date={this.state.date_in}
        mode="date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2100-12-31"
        showIcon={false}
        customStyles={{
        dateInput: {
            alignItems : 'flex-start',
            padding:5
        },
        }}
        onDateChange={(date_in) => {this.setState({date_in: date_in});}}
                 />
          <TouchableOpacity style={styles.button} onPress={this.enviado}>
                <Text style={styles.btnText}>Enviar</Text>
            </TouchableOpacity>
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
    },
    button: {
        alignSelf: 'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30
    },
    btnText: {
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
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

export default FormScreen;