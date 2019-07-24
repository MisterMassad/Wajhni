import * as React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const teachers = [
  { image: require('../Images/Card1-Massad-F.png') },
  { image: require('../Images/Card2-Durra-F.png') },
  { image: require('../Images/Card3-Awwad-F.png') },
  { image: require('../Images/Card4-Tahseen-F.png') },
];
export default class Teachers extends React.Component {
  render() {
    return (
      <View flex={1}>
        <View style={{flex:1, backgroundColor:'#1A89DA',width:'100%', justifyContent:'center'}}>
          <Text style={{fontSize: 50,color:'#FFFFFF', textAlign:'center', alignSelf:"center"}}>
            المعلمون
          </Text>
        </View>
        <View flex={5}>
          <FlatList
            numColumns={2}
            data={teachers}
            renderItem={({ item }) => (
              <View style={{padding:20}}>
                <Image style={styles.image} source={item.image} />
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
  image: {
    width: 150,
    height: 187,
    resizeMode: 'contain',
    
  },
});
