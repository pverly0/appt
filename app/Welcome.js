import React from 'react';
import { Image, ImageBackground, 
    Text, TouchableOpacity, 
    StatusBar} from 'react-native';

import styles from 'appt/src/Styles/styles';

function Welcome({navigation}) {

    return (
        <ImageBackground 
        style={styles.background}
        >
            <Image style={styles.logo} 
            source={require('appt/src/Images/logosBlack.png')} 
            />

            <TouchableOpacity onPress={() => navigation.navigate('TracoOp')}
            style= {styles.butTr}>
               <Text style={{fontSize:21, textAlign: 'center'}}>Traço do Concreto</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('EconAmb')}
            style= {styles.butEc}>
               <Text style={{fontSize:21, textAlign: 'center'} }>Impactos Econômicos</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('EconAmb')}
            style= {styles.butAm}>
               <Text style={{fontSize:21, textAlign: 'center'}}>Impactos Ambientais</Text> 
            </TouchableOpacity>

            <StatusBar style='light'/>
        </ImageBackground>
    );
};

<styles/>; 

export default Welcome;