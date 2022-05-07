import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#121212',
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
        alignSelf: 'center',
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
    butTrMd: {
        position: 'absolute',
        top: '30%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#D9CD8F',
        height: '20%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    butMdTr: {
        position: 'absolute',
        top: '55%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#9AD9B5',
        height: '20%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    butResult: {
        position: 'absolute',
        bottom: 1,
        right: '15%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'grey',
        height: '10%',
        width: '35%',
        
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ddd',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center"
    },
    input:{
        width:"48%",
        borderBottomColor:"#585858",
        borderBottomWidth:2,
        fontSize: 20,
    },    
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:10
    },
    label: {
        width:"48%",
        fontSize:18,
        color: 'white'
    },
    logo: {
        width: 350,
        height: 225,
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
    },
    logoS: {
        width: '15%',
        height: '10%',
        position: 'absolute',
        right: 1,
        bottom: 1,
    },
    
});

export default styles;