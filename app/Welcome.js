import React from 'react';
import { Image, ImageBackground, 
    StyleSheet, Text, 
    View, TouchableOpacity, 
    StatusBar } from 'react-native';

function Welcome(props) {
    
    return (
        <ImageBackground 
        style={styles.background}
        >
            
            <Image style={styles.logo} 
            source={require('appt/src/images/logosb.png')} 
            />

            <TouchableOpacity onPress={() => console.log('tap')}
            style= {styles.butTr}>
               <Text style={{fontSize:21, textAlign: 'center'}}>Traço</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('tap')}
            style= {styles.butEc}>
               <Text style={{fontSize:21, textAlign: 'center'} }>Impactos Econômicos</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('tap')}
            style= {styles.butAm}>
               <Text style={{fontSize:21, textAlign: 'center'}}>Impactos Ambientais</Text> 
            </TouchableOpacity>

            <StatusBar style='light'/>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        height: '25%',
        position: 'absolute',
        top: '20%',
    },
    butTr: {
        position: 'absolute',
        top: '60%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#D9CD8F',
        height: '10%',
        width: '30%',
        left: '4%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    butEc: {
        position: 'absolute',
        top: '60%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#D98B84',
        height: '10%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    butAm: {
        position: 'absolute',
        top: '60%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#9AD9B5',
        height: '10%',
        width: '30%',
        right: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Welcome;