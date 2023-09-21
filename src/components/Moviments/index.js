import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={style.container} activeOpacity={0.5} onPress={() => setShowValue(!showValue)}>
            <Text style={style.date}>{data.date}</Text>
            <View style={style.content}>
                <Text style={style.label}>{data.label}</Text>
                {showValue ? (
                    <Text style={data.type === 1 ? style.value : style.gastos}>{data.type === 1 ? `R$ ${data.value}` : ` -R$ ${data.value}` }</Text> 
                ) : (
                        <View style={style.ocult}>
                            <Feather name="eye" size={24} color="black" />
                        </View>
                )}
                
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        marginBottom: 25,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 10,
        marginEnd: 10,
        marginStart: 10,
    },
    date:{
        color: '#8c8c8c',
        fontWeight: 'bold',
        marginStart: 10,
    },
    label:{
        fontSize:16,
        fontWeight: 'bold',
    },
    value:{
        fontSize: 16,
        color: '#008f2b',
        fontWeight: 'bold',
    },
    gastos:{
        fontSize: 16,
        color: '#8f0000',
        fontWeight: 'bold',
    },
    ocult:{
        borderRadius: 10,
        marginTop: -5,
    }
})