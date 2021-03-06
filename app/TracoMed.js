import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar,
    View, TextInput,
    TouchableOpacity } from 'react-native';
import styles from 'appt/src/Styles/styles';

<styles/>;

function TracoMed({navigation}) {
    return (
        <ImageBackground
        style={styles.background}>
            <StatusBar style='light'/>

            <Image style={styles.logoS} 
            source={require('appt/src/Images/logoSimples.png')} 
            />
            
            <Text style={{fontSize:27, color:'white', top: 5, textAlign:'center'}}>Cálculo do Traço a partir das Medidas:</Text>
            
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Agressividade</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Condição</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Tipo de cimento</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>fck</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Slump</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Dimensão máxima</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Idade</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    keyboardType='decimal-pad'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Método de dosagem</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Result')}
            style= {styles.butResult}>
               <Text style={{fontSize:25, textAlign: 'center', paddingTop:'auto'}}>Ver Resultado</Text> 
            </TouchableOpacity>
            
        </ImageBackground>
    );
}

export default TracoMed;