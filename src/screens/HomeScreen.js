import axios from 'axios'
import React, { Component } from 'react'
import {View ,  Text } from "react-native"


export default class HomeScreen extends Component
{
   constructor(props){
   super(props)

    this.state={
      data:[]
    }
   }

    componentDidMount()
      {
           console.log("C ME HERE")
           axios.get('http://elearningmobileapi.matrixnodes.com/courses?user=5e130bba1e6e9053ee824b12', {
          headers: {
                   'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTEzMGJiYTFlNmU5MDUzZWU4MjRiMTIiLCJpYXQiOjE2MDEzOTM3MjN9.NkKFdKvUPY7vMIozTX1LN_RqVKbxti3tE7NWn1_YhME`
                   }

              })
            
  .then((res) => {
    
    this.setState({data:res.data})
  })
  .catch((error) => {
    console.error(error)
  })
 
        
      }
      render()
      {
         return(

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              
             
               <View>
                 {
                 this.state.data.map((data)=>
                 <text>{data}</text>
                 )
                 
                 }</View>
      </View>
          )
          };

      
        }       