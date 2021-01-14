/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/*import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component
{

  constructor(props)
  {
    super(props)
  }
  componentDidMount()
    {
console.log("not working")
      
    }

    render()
    {
      return(
        <View style={{
          backgroundColor:'#000',flex:1
        }}><Text style={{
          color:'#fff'
        }}>hello World </Text></View>
      )
    }
  
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
*/
// In App.js in a new project


/*


import * as React from 'react';
import {vh , vw } from './assets/styles/baseStyle'
import { SafeAreaView, Image,  FlatList, StyleSheet,  StatusBar , Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = [
  {
    "id": 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
    "title": 'Whiskey Glass',
    "ImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whiskyhogmanay2010.jpg/220px-Whiskyhogmanay2010.jpg"
  },
  {
    "id": '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    "title": 'History',
    "ImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/220px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
  },
  {
    "id": '58694a0f-3da1-471f-bd96-145571e29d72',
    "title": 'Tea Cup',
    "ImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg/250px-Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg"
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title.title}</Text>
    <Image source={{uri : title.ImageUrl}} style={{width:100,height:100  }}/>
  </View>
);

function HomeScreen({ navigation }) {


 
  
  return (
    

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'#000'}}>Home Screen created  by vishal thakur today </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here like 1234 or names ',
          });
        }}
      />
      
     
    </View>
  
  );
}
function DetailsScreen({route, navigation }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
 const renderItem = ({ item }) => (
 <Item title={item }></Item>
  
 ); 
    
    
  
 
 
 
  return (
    
    <SafeAreaView style={styles.container}>


      <FlatList style={{backgroundColor:'#000',flex:0.5}}
        data={DATA}
        renderItem={renderItem}
        
        
        keyExtractor={item => item.id}
        
      />
      
    <View style={{  alignItems: 'center',marginTop:15, justifyContent: 'center',height:vw(60)}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details',{
          itemId: Math.floor(Math.random() * 100),
        })
      }
      />
       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
     
    </View>
    </SafeAreaView>
    


    
  );
  
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
       
      <Stack.Navigator initialRouteName="Home">
      
      <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'My  Home Screen' }}
/>
<Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 0.7,
    height:vw(50)
  
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 13,
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  title: {
    fontSize: 28,
    color:'#fff'

  },
 

});

export default App;



*/


import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import  AppNavigator  from './AppNavigator'
import CreateStore from './CreateStore'

const {store, persistor} = CreateStore()
export default class App extends Component{
  constructor(props)
  {
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount()
    {
       console.log("C ME HERE")
      

    }
   


render() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator
          ref={(nav) => {
            this.navigator = nav
          }}
        />
        
      </PersistGate>
    </Provider>
  );
  
        }

      }
