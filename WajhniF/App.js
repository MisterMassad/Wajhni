
import * as React from 'react';
import Home from './screens/home';
import Courses from './screens/courses';
import Login from './screens/login';
import Forums from './screens/forums';
import Teachers from './screens/teacher_list';
import Math from './screens/courses/math';
import Signup from './screens/signup';
import Chemistry from './screens/chemcurriculum';
import Chemstudy from './screens/chemstudy';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

const AppStack = createSwitchNavigator({
  Courses : Courses,
  Math : Math,
  // {Math : Math,
  // Arabic: Arabic,
  // Biology: Biology,
  // Physics:Physics,
  Chemistry:Chemistry,
  Chemstudy: Chemstudy

})
const AppTabs = createBottomTabNavigator({
  Home: Home,
  Courses: AppStack ,
  Teachers:Teachers,
  Forums:Forums,
});
const SignNav = createSwitchNavigator({
  Login:Login,
  Home:AppTabs,

  
})
const App = createAppContainer(SignNav);
 

export default App;