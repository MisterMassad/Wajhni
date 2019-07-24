import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import firebase from '../firebase';
import { Input } from 'react-native-elements';

export default class Login extends React.Component {
  gohome=()=>{
    this.props.navigation.navigate('Home')
  }
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
        <Image source={require('../Wajhni Logo WHITE.png')}/>
        </View>
        <View style={styles.main}>
          <View style={styles.switchTab}>
            <TouchableOpacity style={styles.switchButton}>
              <Text style={{ fontSize: 30 }}> log in </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchButton}>
              <Text style={{ fontSize: 30 }}> sign up </Text>
            </TouchableOpacity>
          </View>
          <View flex={12}>
            <TextInput
              placeholder="email"
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              placeholder="name"
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              placeholder="password"
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity onPress={this.gohome}>
              <Text>
                log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  publish = () => {
    const accounts = firebase.database().ref('acounts');
    accounts.push({
      Email: this.state.email,
      Password: this.state.password,
    });
  };
  handlePress = () => {
    this.publish();
    this.props.navigation.navigate('Home');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    flex: 7,
  },
  banner: {
    backgroundColor: '#1888D9',
    flex: 3,
  },
  switchButton: {
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 50,
  },
  switchTab: {
    flex: 2,
    backgroundColor: '#C6DCE5',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
