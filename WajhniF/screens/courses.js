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


const courses = [
  { subject: 'Arabic', name: 'اللغة العربية', image:require('../Arabic Icon (1).png')},
  { subject: 'Math', name: 'رياضيات', image:require('../Physics Icon 2.png')},
  { subject: 'English', name: 'English', image:require('../English ABC Icon.png' )},
  { subject: 'Biology',name:'احياء', image:require('../biology.png')},
  { subject: 'Chemistry',name:'كيمياء', image:require('../Chemistry Icon.png')},
  { subject: 'Physics',name:'فيزياء', image:require('../Physics Icon 2.png')},
];


export default class Courses extends React.Component {
  gotocontent = subject => {
    this.props.navigation.navigate(subject);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor:'#1A89DA',width:'100%', justifyContent:'center'}}>
          <Text style={{fontSize: 50, textAlign:'center', alignSelf:"center", color:'#FFFFFF'}}>
            الدورات
          </Text>
        </View>
        <View style ={{backgroundColor:' #FFFFFF',flex:5,}} >
          <FlatList numColumns={2}
            data={courses}
            renderItem={({ item }) => (
              <View style={{padding:20}}>
                <TouchableOpacity
                  onPress={() => {
                    this.gotocontent(item.subject);
                  }}>
                  <Image style={styles.image} source={item.image}/>
                <Text style={{ textAlign:'center'}}>
                {item.name}
                </Text> 
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
  image: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain' 
  }
  
});
  