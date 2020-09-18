import React, {Component} from 'react';
import {
  SafeAreaView,
        ActivityIndicator,
        Statusbar,
        AsyncStorage,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createSwitchNavigator , createAppContainer} from 'react-navigation';
import createStackNavigator from 'react-navigation-stack';
const userInfo={username:'admin',password:'12345'};
export default class LoginScreen extends React.Component {

        constructor(props){
                super(props);
                this.state={username:'',password:''}
        }
 render() {
  return (
          <View style={styles.container}>
          <Text style={styles.welcome}>Login!</Text>
          <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(username)=>this.setState({username})}
                value={this.state.username}
          />
          <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                securetextEntry={true}
          />
          <TouchableOpacity
            style={styles.btnEnter}
          onPress={this._signin}
          >
          <Text style={styles.btnEnterText}>ENTER</Text>
          </TouchableOpacity>
          </View>
  );
 }
        _signin = async() => {
                if(userInfo.username===this.state.username && userInfo.password===this.state.password){
                alert('Logged In');
                }else{
                        alert('Username or Password Incorrect');
                }
        }
};
//
//class HomeScreen extends React.Component{
//        render(){
//                return(
//                <View style={styles.container}>
//                <Text style={styles.welcome}>
//                        Welcome Logged Page
//                </Text>
//                        </View>
//                );
//
//        }
//}
//
//class AuthLoadingScreen extends React.Component{
//        constructor(props){
//                super(props);
//                this._loadData();
//
//        }
//        render(){
//                return(
//                <View style={styles.container}>
//                        <ActivityIndicator/>
//                        <StatusBar barStyle="default"/>
//
//                        </View>
//                );
//
//        }
//        _loadData = async () => {
//                const logged = await AsyncStorage.getItem('logged');
//                this.props.navigation.navigate(logged !== true ? 'Auth' : 'App');
//        }
//}
//
//
//const AppStack = createStackNavigator({Home: HomeScreen});
//const AuthStack = createStackNavigator({Login: LoginScreen});
//export default createStackNavigator({
//                AuthLoading: AuthLoadingScreen,
//                App: AppStack,
//                Auth: AuthStack
//        },{
//                initialRouteName:'AuthLoading'
//        }
//);
////
////export default createAppContainer(
////createSwitchNavigator(
////        {
////                AuthLoading: AuthLoadingScreen,
////                App: AppStack,
////                Auth: AuthStack
////        },{
////                initialRouteName:'AuthLoading'
////        }
////)
////);
const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#ff00ff',
        },
        welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
        },
        input: {
                margin:15,
                height:40,
                padding:5,
                fontSize:16,
                borderBottomWidth:1,
                borderBottomColor:'#428AF8'
        },
        btnEnter: {
                justifyContent:'center',
                flexDirection:'row',
                backgroundColor:'#428AF8',
                alignItems:'center',
                marginLeft:15,
                marginRight:15,
                padding:20,

        },
        btnEnterText: {
                color:'red',
                fontWeight:'700'
        },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

