import React from "react";
import {View, TextInput, Text} from 'react-native';

export default function(){
    return(
        <View>
            <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Valor X (un medida)</Text>
            <TextInput
                style={{color:'white', fontSize:20,
                borderWidth:1, borderColor:'white', height:30, width:170, marginVertical:12,
                position: 'absolute', right:1, top:20}}
                keyboardType='decimal-pad'
            />
        </View>
    )
}