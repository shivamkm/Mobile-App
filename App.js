import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
   StyleSheet,
        TouchableOpacity
} from 'react-native';

import Secured from './Secured';

 class Login extends Component {

  state = {
          name: '',
          email: '',
          password: '',
          password2: '',
          colors:['green', 'blue', 'yellow', 'red'],
          buttonColor1:'blue',
          buttonColor2: 'blue'
  }
        changeColor1(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.setState({buttonColor1:currentColor});
  }

        changeColor2(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.setState({buttonColor2:currentColor});
  }
    render() {
            
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='name'
                onChangeText={(name)=>this.setState({name})}
                value={this.state.name}
                />

                <TextInput placeholder='email'
                 onChangeText={(email)=>this.setState({email})}
                 value={this.state.email}
               // securetextEntry={true}
                />
                <TextInput placeholder='password'
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                />
                <TextInput placeholder='password2'
                onChangeText={(password2)=>this.setState({password2})}
                value={this.state.password2}
                />


<TouchableOpacity
         style={{backgroundColor: this.state.buttonColor1, padding: 15}}
         onPress={() => this.register()}
       >
         <Text> SIGNUP </Text>
 </TouchableOpacity>


                <View style={{margin:7}} />
                <View style={{margin:7}} />
<TouchableOpacity
         style={{backgroundColor: this.state.buttonColor2, padding: 15}}
         onPress={() => this.login()}
       >
         <Text> LOGIN </Text>
 </TouchableOpacity>

                  </ScrollView>
            )
    }

        register = () => {
                this.changeColor1();
        var params = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        var proceed = false;
        fetch("http://172.27.22.126:5000/api/users/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then((response) => response.json())
            .then((response) => {
               // console.log(response);
                 //   proceed = true;
                  //  alert(response.message);
                if (response.__v==0)
                {
                 this.props.navigation.navigate('Secured');
                 //   proceed = true;
                    console.log("SUCCESS");
                }
                    else
                            alert(response.message);                            
            })
            .then(() => {
            })

            .catch(err => {
                    alert(response.message);
			});
                this.state.name='';
                this.state.email='';
                this.state.password='';
                this.state.password2='';
    }
        login = () => {
                this.changeColor2();
        var params = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        var proceed = false;
        fetch("http://172.27.22.126:5000/api/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then((response) => response.json())
            .then((response) => {
               // console.log(response);
                 //   proceed = true;
                  //  alert(response.message);
                if (response.success == true)
                {
                 this.props.navigation.navigate('Secured');
                 //   proceed = true;
                    console.log("SUCCESS");
                }
                    else
                            alert(response.message);                            
            })
            .then(() => {
            })

            .catch(err => {
                    alert(response.message);
			});

                this.state.name='';
                this.state.email='';
                this.state.password='';
                this.state.password2='';
    }
}




const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Secured: Secured,
  },
  {
    initialRouteName: 'Login'
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  text:{
    color:'white'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
//React.render(<Login />, document.getElementById('container'));
//
//import React, { Component } from 'react';
//
//
//import {
//  AppRegistry
//} from 'react-native';
//
//import Login from './Login';
//import Secured from './Secured';
//
//export default class ReactNativeStormpath extends Component {
//
//  state = {
//    isLoggedIn: false
//  }
//
//  render() {
//
//    if (this.state.isLoggedIn) 
//      return <Secured 
//          onLogoutPress={() => this.setState({isLoggedIn: false})}
//        />;
//    else 
