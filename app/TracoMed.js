import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar,
    View, TextInput,
    TouchableOpacity } from 'react-native';
import styles from 'appt/src/Styles/styles';

<styles/>;

function TracoMed(props) {
    return (
        <ImageBackground
        style={styles.background}>
            <StatusBar style='light'/>

            <Image style={styles.logoS} 
            source={require('appt/src/Images/logoSimples.png')} 
            />
            
            <Text style={{fontSize:30, color:'white', top: 5, textAlign:'center'}}>Cálculo do Traço a partir das Medidas:</Text>
            
            <View>
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170, marginVertical:6,
                    position: 'absolute', right:1, top: 20}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 78}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 126}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 178}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 229}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 281}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 331}}
                    keyboardType='decimal-pad'
                />
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Agressividade</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderTopWidth : 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth : 1,
                    borderColor:'white', height:30, width:170,
                    position: 'absolute', right:1, top: 382}}
                    keyboardType='decimal-pad'
                />
            </View>

            <TouchableOpacity onPress={() => console.log('tap')}
            style= {styles.butResult}>
               <Text style={{fontSize:25, textAlign: 'center'}}>Ver Resultado</Text> 
            </TouchableOpacity>
            
        </ImageBackground>
    );
}

export default TracoMed;