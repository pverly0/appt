import React from 'react';
import { ImageBackground, Image,
    Text, TouchableOpacity,
    StatusBar } from 'react-native';
import styles from 'appt/src/Styles/styles';

<styles/>;

function TracoOp(props) {
    return (
        <ImageBackground
        style={styles.background}>
            <StatusBar style='light'/>

            <Image style={styles.logoS} 
            source={require('appt/src/Images/logoSimples.png')} 
            />

            <Text style={{fontSize:30, color:'white', top: '10%', textAlign:'center'}}>O que gostaria de fazer?</Text>

            <TouchableOpacity onPress={() => console.log('tap')}
            style= {styles.butTrMd}>
               <Text style={{fontSize:25, textAlign: 'center'}}>Cálculo do Traço a partir das Medidas</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('tap')}
            style= {styles.butMdTr}>
               <Text style={{fontSize:25, textAlign: 'center'}}>Cálculo das Medidas a partir do Traço</Text> 
            </TouchableOpacity>

        </ImageBackground>
    );
}

export default TracoOp;