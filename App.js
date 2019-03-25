import {Navigation} from 'react-native-navigation';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import LandingScreen from './src/screens/LandingScreen/LandingScreen';
import FormScreen from './src/screens/FormScreen/FormScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import MapScreen from './src/screens/MapScreen/MapScreen';


//Registrar Screens
Navigation.registerComponent("PantallaPrincipal",()=>LandingScreen);
Navigation.registerComponent("PantallaFormulario",()=>FormScreen);
Navigation.registerComponent("PantallaSplash",()=>SplashScreen);
Navigation.registerComponent("PantallaSignIn",()=>SignInScreen);
Navigation.registerComponent("PantallaSignUp",()=>SignUpScreen);
Navigation.registerComponent("PantallaMapa",()=>MapScreen);

//Iniciar una aplicacion
Navigation.events().registerAppLaunchedListener(()=>{
  Navigation.setRoot({
    root:{
      component: {
        name:"PantallaSplash"
      }
    }
  });
});