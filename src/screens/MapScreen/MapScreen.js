import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import {goToAuth} from '../../navigation';
import {USER_KEY} from '../../config';
import {Navigation} from 'react-native-navigation';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 32.522458;
const LONGITUDE = -117.019024;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
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

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={(e) => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap para crear una marca de color aleatorio</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

MapScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default MapScreen;