import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
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
        alignItems: 'center',
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
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        height: '25%',
        position: 'absolute',
        top: '20%',
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