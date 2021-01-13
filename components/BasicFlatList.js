import * as React from 'react';
import { AppRegistry, Image,  FlatList, StyleSheet, Button, View, Text } from 'react-native';
import {flatListData} from './data/flatListData';

class FlatlistItem extends Component{

    render()
    {
        return(
        <View style={{
            flex:1,
        backgroundColor:this.props.index % 2==0? 'mediumseagreen': 'tomato'

        }}>

            <Text style={styles,FlatlistItem}>{this.props.item.name}</Text>
            <Text style={styles,FlatlistItem}>{this.props.item.description}</Text>
            </View>
            );

    }
}

const styles = StyleSheet.create({
    FlatlistItem:{
        color:'white',
        padding:10,
        fontSize:16,

    }
})
export default class BasicFlatList extends Component{

    render()
    {
        return(
            <view style={{flex:1,marginTop:22}}>
                <FlatList data={flatListData}
                renderItem={({item,index})=>{
                    //console.log('Item = ${JSON.strigfy(item)}, index= ${index}');
                    return(
                        <FlatlistItem item={item} index={index}></FlatlistItem>);
                    }
                }>   
                    </FlatList>
            </view>
        );
    }
}
