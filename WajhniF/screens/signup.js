import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Input } from 'react-native-elements';
import firebase from './firebase';

// You can import from local files
// or any pure javascript modules available in npm


export default class Signup extends React.Component {
  gotohome=()=>{
    this.props.navigation.navigate('Home')
  }
 state = {
    full_name: '',
    email: '',
    school: '',
    password: '',
    phone_number: '',
  };
  signUp = () => {
    console.log('hey');
    const email = this.state.email;
    const school = this.state.school;
    const phone_number = this.state.phone_number;
    const password = this.state.password;
    const full_name= this.state.full_name;
    const LOLERS = firebase.database().ref('Users');
    LOLERS.push({
      email: email,
      school: school,
      phone_number: phone_number,
      full_name:full_name,
      password:password,
    });
  };
  render() {
    return (
      <View style={styles.container}>

        <View>
        <TouchableOpacity onPress= {this.gotohome} >
        <Text>
        go to home screen
        </Text>
        </TouchableOpacity>
          <Image style={styles.image} source={require('./../Images/WajhniLogo.png')} />
        </View>  
        <Input onChangeText={full_name => this.setState({full_name })} placeholder = 'Full Name' />
        
        <Input onChangeText={school => this.setState({ school })} placeholder = 'School Name' />

        <Input onChangeText={phone_number => this.setState({ phone_number })} placeholder = 'Phone Number' />

        <Input onChangeText={email => this.setState({ email })} placeholder = 'Email' />
        
        <Input onChangeText={password => this.setState({ password })} secureTextEntry={true} placeholder = 'Password' />
        
        


        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    width:500,
    hieght:200,
  }
});
