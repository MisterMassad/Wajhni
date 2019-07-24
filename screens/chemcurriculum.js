import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SectionList, TouchableOpacity , Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

const units = [
  { unit: 'البناء الالكتروني للذرة', data: [
    'الضوء مفتاح البناء إلالكتروني 1.1',
    '1.2 الطيف الذري',
    '1.3 نظرية بور لذرة الهيدروجين',
    ' 1.4 نظرية الميكانيك الكمي'
    , '1.5 قواعد التركيب ا إلالكتروني'
    ,'العدد الذري والكترونات التكافؤ 1.6 ',
  ]
  },
    {unit:'الصفات الدورية ونظرية رابطة التكافؤ',data:[
    '2.1 الجدول الدوري الحديث',
    '2.2 الخصائص الدورية للعناصر',
    '2.3 العناصر الانتقالية في الدورة الرابعة من الجدول الدوري',
    '2.4 نظرية رابطة التكافؤ',
    ] }
];
export default class Chemistry extends React.Component {
  odrosbshrfk=() =>{
    this.props.navigation.navigate('Chemstudy')
  }
  gobacktocourses=()=>{
    this.props.navigation.navigate('Courses')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.banner}>
          <TouchableOpacity onPress={this.gobacktocourses}>
            <Image style={styles.images}source={require('../BACK WHITE BUTTON.png')}/>
        </TouchableOpacity>
          <Text style={styles.bannerTitle}>منهاج</Text>
        </View>
        <View style={styles.container}>
          <SectionList
            style={styles.sectionList}
            sections={units}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={this.odrosbshrfk}>
              <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.unit}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    color: 'white',
    fontSize: 28,
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    color: 'white',
    fontSize: 20,
    marginRight: 20,
    margin: 5,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 40,
    alignSelf:'center'
  },
  banner: {
    textAlign: 'center',
    
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#AAABAA',
  },
  container: {
    flex: 5,
    backgroundColor: '#0B3B4F',
    textAlign: 'right',
  },
  sectionList: {
    margin: 40,
  },
  images: {
    width: 75,
    height: 25,
    resizeMode: 'contain',
  },
});
