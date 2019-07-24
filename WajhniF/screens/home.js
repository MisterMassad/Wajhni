import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Constants from 'expo-constants';

// You can import from local files 


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const courseData = [
  { subject: 'عربي', progress: 70 },
  { subject: 'english', progress: 69 },
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>فلان علّان</Text>
        </View>
        <View style={styles.main}>
          <FlatList
            data={courseData}
            numColumns={2}
            renderItem={({ item }) => (
            <View style={styles.circle}>
              <AnimatedCircularProgress
                size={120}
                width={15}
                fill={item.progress}
                tintColor="#00e0ff"
                backgroundColor="#3d5875"
                rotation={0}
                >
                {fill => (
                  <Text style={{ alignSelf: 'center' }}>{item.subject}</Text>
                )}
              </AnimatedCircularProgress>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    padding:20,
  },
  name: {
    fontSize: 30,
    alignSelf: 'center',
  },
  main: {
    flex: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
});

