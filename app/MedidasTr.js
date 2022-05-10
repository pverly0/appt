import React from 'react';
import { ImageBackground, Image,
    Text, StatusBar,
    View, TextInput,
    TouchableOpacity } from 'react-native';
import styles from 'appt/src/Styles/styles';

<styles/>;

function MedidasTr({navigation}) {
    return (
        <ImageBackground
        style={styles.background}>
            <StatusBar style='light'/>

            <Image style={styles.logoS} 
            source={require('appt/src/Images/logoSimples.png')} 
            />
            
            <Text style={{fontSize:30, color:'white', top: 5, textAlign:'center'}}>Cálculo das Medidas a partir do Traço:</Text>
            
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor A</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor B</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor C</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor D</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor E</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor F</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor G</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    keyboardType='decimal-pad'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor H</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Insira aqui"
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Result')}
            style= {styles.butResult}>
               <Text style={{fontSize:25, textAlign: 'center'}}>Ver Resultado</Text> 
            </TouchableOpacity>
            
        </ImageBackground>
    );
}

export default MedidasTr;