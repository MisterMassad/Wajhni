import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Header } from 'react-native-elements';

const routes = [
  { route: 'videos', image: require('../Video Play Button.png') },
  { route: 'lectures', image: require('../LECTURES ICON.png') },
  { route: 'questions', image: require('../Quiz-Games.png') },
];

export default class Chemstudy extends React.Component {
  gotocontent = route => {
    this.props.navigation.navigate(route);
  };
  goback = () => {
    this.props.navigation.navigate('Chemistry');
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#1A89DA',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={this.goback}>
            <Image
              style={styles.images}
              source={require('../BACK WHITE BUTTON.png')}
            />
          </TouchableOpacity>
          <Text
            style={{ fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>
            كيمياء
          </Text>
        </View>
        <View style={{ backgroundColor: ' #FFFFFF', flex: 5 }}>
          <FlatList
            data={routes}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.gotocontent(item.route);
                  }}>
                  <Image style={styles.image} source={item.image} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  container2: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  image: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  images: {
    width: 75,
    height: 25,
    resizeMode: 'contain',
  },
});
