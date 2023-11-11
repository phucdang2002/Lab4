import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./src/Contact";
import ContactListItem from "./src/ContactListItem";
import Favorites from "./src/Favorites";
import store from "./src/Store";
import {Provider} from "react-redux";
import ProfileContact from "./src/ProfileContact";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
        initialRouteName="Contacts"
        screenOptions={
          {
            headerShown: true
          }
        }>
      <Stack.Screen name="Contacts" component={Contacts}
          options={{title: "Contacts"}}/>

      <Stack.Screen
          name="ProfileContact"
          component={ProfileContact}
          options={{title: "Profile Contact"}}/>
    </Stack.Navigator>
  )
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={
        {
          headerShown: true
        }
      }
    >
        <Stack.Screen name="Favorites" component={Favorites}
          options={{title: "Favorites"}}/>
        <Stack.Screen
          name="ProfileContact"
          component={ProfileContact}
          options={{title: "Profile Contact"}}  
        />
      </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () =>{
  return (
    <Tab.Navigator
        initialRouteName="ContactsScreens"
        barStyle={{backgroundColor: "blue"}}
        labeled={false}
        activeColor={"#d3d3d3"}
        inactiveColor={"#ff00ff"}
    >
      <Tab.Screen name="Contacts" component={ContactsScreens}
          options={{
            tabBarIcon: 'format-list-bulleted',
          }}
      />
      <Tab.Screen name="Favorites" component={FavoriteScreens}
          options={{
            tabBarIcon: 'star-check',
          }}
      />
    </Tab.Navigator>
  )
}
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </Provider>
    
  )
}
export default App;