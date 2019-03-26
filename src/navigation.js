// navigation.js
import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: { 
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'PantallaSignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../img/signIn.png')
              }
            }
          },
        },
        {
          component: {
            name: 'PantallaSignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                icon: require('../img/signUp.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'PantallaPrincipal',
              options: {
                layout:{
                  orientation: ['portrait']
                },
                topBar: {
                  title: {
                    text: 'Dashboard',
                    fontSize:20,
                    alignment:'center'
                  },
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../img/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../img/dashboard.png'),
              testID: 'FIRST_TAB_BAR_BUTTON',
              text: 'Landing Screen',
              fontSize: 12
            }
          }
        }
      },
      {
        stack: {
          children: [{
            component: {
              name: 'PantallaFormulario',
              options: {
                layout:{
                  orientation: ['portrait']
                },
                topBar: {
                  title: {
                    text: 'Formulario',
                    fontSize:20,
                    alignment:'center'
                  },
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../img/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../img/form.png'),
              testID: 'SECOND_TAB_BAR_BUTTON',
              text: 'Form Screen',
              fontSize: 12
            }
          }
        }
      },
      {
        stack: {
          children: [{
            component: {
              name: 'PantallaMapa',
              options: {
                topBar: {
                  title: {
                    text: 'Pantalla Mapa',
                    fontSize:20,
                    alignment:'center'
                  },
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../img/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../img/map.png'),
              testID: 'SECOND_TAB_BAR_BUTTON',
              text: 'Map Screen',
              fontSize: 12
            }
          }
        }
      }]
    }
  },
})