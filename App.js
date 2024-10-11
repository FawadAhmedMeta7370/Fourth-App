import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavouritesScreen from './screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FavoritesContextProvider from './store/context/favorites-context';
import {Provider} from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'brown'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: 'pink'},
        drawerActiveBackgroundColor: '#ccc',
        drawerContentStyle: {backgroundColor: '#bb5b5b', borderWidth: 1},
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: 'Favorites Screen',
          drawerIcon: ({color, size}) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: 'brown'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: 'pink'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                title: 'Meals Overview',
              }}
            />
            <Stack.Screen
              name="MealsDetail"
              component={MealsDetailScreen}
              options={{
                title: 'About the meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
