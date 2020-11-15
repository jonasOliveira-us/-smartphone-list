import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
function App() {
  return (  
    <View style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="PeoplePage">
            <Stack.Screen name="Lista de Smartphone" component={PeoplePage} />
            <Stack.Screen name="Detalhe dos Smartphone" component={PeopleDetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});


export default App;