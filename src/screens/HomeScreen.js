import { Component } from "react";
import {View , Button , Text } from "react-native"

export default class HomeScreen extends Component
{
   
    componentDidMount()
      {
  console.log("C ME HERE")
        
      }

      render()
      {
          return(

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'#000'}}>Home Screen created  by vishal thakur today </Text>
           
     
    </View>
          );
          };
}