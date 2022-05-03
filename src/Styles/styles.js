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
    logo: {
        width: '70%',
        height: '25%',
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
    },
    logoS: {
        width: '15%',
        height: '10%',
        position: 'absolute',
        right: '1%',
        bottom: '1%',
    },
});

export default styles;