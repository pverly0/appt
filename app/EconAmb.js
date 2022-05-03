import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar,
    ScrollView } from 'react-native';
import styles from 'appt/src/Styles/styles';
import CaixaValor from 'appt/src/Styles/CaixaValor';

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
            
            <CaixaValor/>
            <CaixaValor/>
            <CaixaValor/>
            <CaixaValor/>
            <CaixaValor/>
            <CaixaValor/>
            <CaixaValor/>
            
        </ImageBackground>
    );
}

export default Econ;