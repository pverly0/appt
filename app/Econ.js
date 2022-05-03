import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar } from 'react-native';
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

            <Text style={{fontSize:30, color:'white', top: '2%', alignSelf: 'center'}}>Insira os dados:</Text>

            <Text style={{fontSize:20, color:'white', textAlign:'left', top:'5%'}}>Volume</Text>

        </ImageBackground>
    );
}

export default Econ;