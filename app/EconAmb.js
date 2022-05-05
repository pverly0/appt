import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar,
    View, TextInput } from 'react-native';
import styles from 'appt/src/Styles/styles';

<styles/>;

function Econ(props) {
    return (
        <ImageBackground
        style={styles.background}>
            <StatusBar style='light'/>

            <Image style={styles.logoS} 
            source={require('appt/src/Images/logoSimples.png')} 
            />
            
            <Text style={{fontSize:30, color:'white', top: 5, alignSelf: 'center'}}>Insira os dados:</Text>
            
            <View>
                <Text style={{fontSize:20, color:'white', textAlign:'left', top:20, marginVertical:12,}}>Valor X</Text>
                <TextInput
                    style={{color:'white', fontSize:20,
                    borderWidth:1, borderColor:'white', height:30, width:170, marginVertical:12,
                    position: 'absolute', right:1, top:20}}
                    keyboardType='decimal-pad'
                />
            </View>
            
        </ImageBackground>
    );
}

export default Econ;