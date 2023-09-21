import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance( {gastos, saldo}) {
 return (
   <View style={style.container}>
    <View style={style.item}>
        <Text style={style.itemTitle}>Saldo:</Text>
            <View style={style.content}>
                <Text style={style.currencySymbol}>R$</Text>
                <Text style={style.balance}>{saldo}</Text>
            </View>
    </View>

    <View style={style.item}>
        <Text style={style.itemTitle}>Gastos:</Text>
            <View style={style.content}>
                <Text style={style.currencySymbol}>R$</Text>
                <Text style={style.gastos}>{gastos}</Text>
            </View>
    </View>
   </View>
  );
}

const style= StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        backgroundColor: '#FFF',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 5,
        paddingBottom: 22,
        paddingTop: 22,
        zIndex: 99,
    },

    itemTitle:{
        fontSize: 20,
        color: "#dadada",
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    currencySymbol:{
        color:'#dadada',
        marginRight: 5,
    },

    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },

    gastos:{
        fontSize: 22,
        color: '#e74e3c'
    }

    
})