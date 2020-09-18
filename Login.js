import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

import Secured from './Secured';
 class Login extends Component {

  state = {
          name: '',
          email: '',
          password: '',
          password: ''
  }
        
  signup = () => {
    const data = {

            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
    };
    axios.post('http://172.27.22.126/api/users/register', { data })
      .then(res => {
        alert(res.data["message"]);
      })
      .catch(err => console.log(err));
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
                <View style={{margin:7}} />
                <Button 
                          onPress={() => this.handle}
                          title="Submit"
                      />
                  </ScrollView>
            )
    }

         handle = () => {
                 alert("in handle");
         }


        _userLogin = () => {
                alert("shivam");
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
                    alert("shivam");
                console.log(response);
                    proceed = true;
                    console.log("SUCCESS");
                if (response.email=="")
                {
                    proceed = true;
                    console.log("SUCCESS");
                 alert(response.message);
                }
                    else
                 this.props.navigation.navigate('Secured');
                            
            })
            .then(() => {
            })

            .catch(err => {
                    alert(response.message);
			});
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

